const Commando = require('discord.js-commando')

const muteSchema = require('../../schemas/mute-schema')

module.exports = class UnmuteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'unmute',
            group: 'moderation',
            memberName: 'unmute',
            description: 'Unmutes a specified user.',
            argsType: 'multiple',
            clientPermissions: ['MUTE_MEMBERS'],
            userPermissions: ['MUTE_MEMBERS'],
            guildOnly: true
        })
    }

    async run(message, args) {
        if (args.length === 0) {
            message.reply('specify a user to unmute.')
            return
        }
        let id = ''

        const target = message.mentions.users.first()
        if (target) {
            id = target.id
        } else {
            id = args[0]
        }

        const result = await muteSchema.updateOne(
            {
                guildId: message.guild.id,
                userId: id,
                current: true
            },
            {
                current: false
            }
        )

        if (result.nModified === 1) {
            const mutedRole = message.guild.roles.cache.find(role => {
                return role.name === '▥ In Prison'
            })

            if (mutedRole) {
                const guildMember = message.guild.members.cache.get(id)
                guildMember.roles.remove(mutedRole)
            }

            message.channel.send(`<@${id}> is now unmuted!`)
        } else {
            message.channel.send(`<@${id}> is not muted...`)
        }
    }
}