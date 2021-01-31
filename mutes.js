const muteSchema = require('./schemas/mute-schema')

module.exports = client => {
    const checkMutes = async () => {
        const now = new Date()

        const conditional = {
            expires: {
                $lt: now
            },
            current: true
        }

        const results = await muteSchema.find(conditional)

        if (result && results.length) {
            for (const result of results) {
                const { guildId, userId } = result

                const guild = client.guilds.cache.get(guildId)
                const member = (await guild.members.fetch()).get(userId)

                const mutedRole1 = guild.roles.cache.find(role => {
                    return role.name === '▥ In Prison'
                })

                member.roles.remove(mutedRole1)
            }

            await muteSchema.updateMany(conditional, {
                current: false
            })
        }

        setTimeout(checkMutes, 1000 * 60 * 10)
    }
    checkMutes()

    client.on('guildMemberAdd', async member => {
        const { guild, id } = member

        const currentMute = await muteSchema.findOne({
            userId: id,
            guildId: guild.id,
            current: true
        })

        if (currentMute) {
            const mutedRole2 = guild.roles.cache.find(role => {
                return role.name === '▥ In Prison'
            })

            if (mutedRole2) {
                member.roles.add(mutedRole2)
            }
        }
    })
}