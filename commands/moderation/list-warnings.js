const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')

module.exports = {
    commands: ['list-warnings', 'warn-list'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 1,
    description: 'View the warn list of the server.',
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first()
        if (!target) {
            console.log('Specify a user.')
            return
        }

        const guildId = message.guild.id
        const userId = message.member.id

        await mongo().then(async mongoose => {
            try {
                const results = await warnSchema.findOne({
                    guildId,
                    userId
                })

                let warn = `Previous warnings for <@${userId}>:\n\n`

                for (const warning of results.warnings) {
                    const { author, timestamp, reason } = warning

                    warn += `By ${author} on ${new Date(timestamp).toLocaleDateString()} for "${reason}"\n\n`
                }

                message.channel.send(warn)
            } finally {
                mongoose.connection.close()
            }
        })
    },
    permissions: [],
    requiredRoles: ['◈ Division'],
}