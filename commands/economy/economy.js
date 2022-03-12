const economySchema = require('../../schemas/economy-schema')

const bitsCache = {}

module.exports = (client) => {}

module.exports.addBits = async (guildId, userId, bits) => {
    const result = await economySchema.findOneAndUpdate(
        {
            guildId,
            userId
        },
        {
            guildId,
            userId,
            $inc: {
                bits
            }
        },
        {
            upsert: true,
            new: true
        }
    )

    bitsCache[`${guildId}-${userId}`] = result.bits

    return result.bits
}

module.exports.getBits = async (guildId, userId) => {
    const cachedValue = bitsCache[`${guildId}-${userId}`]
    if (cachedValue) {
        return cachedValue
    }

    const result = await economySchema.findOne({
        guildId,
        userId
    })

    let bits = 0
    if (result) {
        bits = result.bits
    } else {
        await new economySchema({
            guildId,
            userId,
            bits
        }).save()
    }

    bitsCache[`${guildId}-${userId}`] = bits

    return bits
}