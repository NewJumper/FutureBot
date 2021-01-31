const Commando = require('discord.js-commando')

module.exports = class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'Kicks a specified user.',
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS'],
            guildOnly: true
        })
    }

    async run(message) {
        const target = message.mentions.users.first()
        if(!target) {
            message.reply("specify a user to kick.")
            return
        }

        const member = message.guild.members.cache.get(target.id)
        if (member.kickable) {
            member.kick()
            message.channel.send(`<@${target.id}> has been kicked!`)
        } else {
            message.channel.send(`Unable to kick <@${target.id}>`)
        }
    }
}