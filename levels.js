const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, member } = message

        addXP(guild.id, member.id, 23, message)
    })
}

const getNeededXP = (level) => 5 * Math.pow(level, 2) + 50 * level + 100

const addXP = async (guildId, userId, xpToAdd, message) => {
    await mongo().then(async (mongoose) => {
        try {
            const result = await profileSchema.findOneAndUpdate(
                {
                    guildId,
                    userId
                },
                {
                    guildId,
                    userId,
                    $inc: {
                        xp: xpToAdd
                    }
                },
                {
                    upsert: true,
                    new: true
                }
            )

            let { xp, level } = result
            const needed = getNeededXP(level)

            if (xp >= needed) {
                ++level
                xp -= needed

                message.channel.send(`**HACK DETECTED**\n<@${userId}> just got a tad bit smarter and now has an IQ of **${level}** with **${xp}** brain cells to spare...\nThey now need to make room for **${getNeededXP(level)}** more brain cells to increase their IQ.`)

                await profileSchema.updateOne(
                    {
                        guildId,
                        userId,
                    },
                    {
                        level,
                        xp,
                    }
                )
            }
        } finally {
            mongoose.connection.close()
        }
    })
}

module.exports.addXP = addXP