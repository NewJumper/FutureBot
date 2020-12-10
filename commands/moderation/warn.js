const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')

module.exports = {
    commands: ['warn'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 2,
    description: 'Warn a specified user.',
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first()
        if (!target) {
            console.log('Specify a user')
            return
        }

        arguments.shift()

        const guildId = message.guild.id
        const userId = message.member.id
        const reason = arguments.join(' ')

        const warning = {
            author: message.member.user.tag,
            timestamp: new Date().getTime(),
            reason
        }

        await mongo().then(async mongoose => {
            try {
                await warnSchema.findOneAndUpdate(
                    {
                        guildId,
                        userId
                    }, {
                        guildId,
                        userId,
                        $push: {
                            warnings: warning
                        }
                    }, {
                        upsert: true
                    }
                )
            } finally {
                mongoose.connection.close()
            }
        })
    },
    permissions: [],
    requiredRoles: ['◈ Division'],
}