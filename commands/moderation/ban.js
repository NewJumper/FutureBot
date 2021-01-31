const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class BanCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'moderation',
            memberName: 'ban',
            description: 'Bans a specified user.',
            argsType: 'multiple',
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            guildOnly: true
        })
    }

    async run(message, args) {
        const target = message.mentions.users.first()
        if(!target) {
            message.reply('specify a user to ban.')
            return
        }

        let reason = args.slice(1).join(" ")
        if (!reason) reason = 'unknown'

        const ban1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🔒  BAN')
            .setDescription(`**The Sumpreme Intellegence has forever banned <@${target.id}> from ${message.guild.name}**\n\n**Reason:** ${reason}`)
            .setTimestamp()

        const member = message.guild.members.cache.get(target.id)
        if (member.bannable) {
            member.ban()
            message.channel.send(ban1Embed)
        } else {
            message.channel.send(`Unable to ban <@${target.id}>`)
        }
    }
}