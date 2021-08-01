const economySchema = require('../../schemas/economy-schema')

const coinsCache = {}

module.exports = (client) => {}

module.exports.addCoins = async (guildId, userId, coins) => {
    const result = await economySchema.findOneAndUpdate(
        {
            guildId,
            userId
        },
        {
            guildId,
            userId,
            $inc: {
                coins
            }
        },
        {
            upsert: true,
            new: true
        }
    )

    coinsCache[`${guildId}-${userId}`] = result.coins

    return result.coins
}

module.exports.getCoins = async (guildId, userId) => {
    const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue) {
        return cachedValue
    }

    const result = await economySchema.findOne({
        guildId,
        userId
    })

    let coins = 0
    if (result) {
        coins = result.coins
    } else {
        await new economySchema({
            guildId,
            userId,
            coins
        }).save()
    }

    coinsCache[`${guildId}-${userId}`] = coins

    return coins
}