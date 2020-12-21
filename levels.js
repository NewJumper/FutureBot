const config = require('./config.json')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, member } = message

        if (message.author.id === '743588174244348064') {
            return
        } else if (message.author.id === '159985870458322944') {
            return
        } else if (message.author.id === '170915625722576896') {
            return
        } else {
            addXP(guild.id, member.id, 3, message)
        }
    })
}

const getNeededXP = (level) => level * 2 * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
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

        message.channel.send(`**SIMULATION BREAK**\n<@${userId}> just got a tad bit smarter and now has an IQ of **${level}** with **${xp}** brain cells to spare...\nThey now need to make room for **${getNeededXP(level)}** more brain cells to increase their IQ.`)

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

    if (level >= 200) {
        message.member.roles.add('789696209786896424');
        // Sector 733
    } else if (level >= 150) {
        message.member.roles.add('766064012257263686');
        // Sector 517
    } else if (level >= 100) {
        message.member.roles.add('766064287880839199');
        // Sector 289
    } else if (level >= 50) {
        message.member.roles.add('766064174337490974');
        // Sector 109
    } else if (level >= 25) {
        message.member.roles.add('766062864690970654');
        // Sector 043
    } else if (level >= 10) {
        message.member.roles.add('766061679103574066');
        // Sector 026
    } else if (level >= 5) {
        message.member.roles.add('789691739027668992');
        // Sector 001
    }
}

module.exports.addXP = addXP