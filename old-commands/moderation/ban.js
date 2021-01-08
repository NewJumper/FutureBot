const Discord = require('discord.js')

module.exports = {
    commands: ['ban'],
    expectedArgs: '@user <reason>`*',
    permissionError: '',
    minArgs: 1,
    maxArgs: null,
    description: 'Bans a specified member.',
    callback: (message, arguments, text) => {
        const { member, mentions } = message
        
        const target = mentions.users.first()
        if (target) {
            let reason = arguments.slice(1).join(" ")
            if (!reason) reason = "unknown"

            const ban1Embed = new Discord.MessageEmbed()
                .setColor('#1b70bf')
                .setTitle(`🔒  BAN`)
                .setDescription(`**The Sumpreme Intellegence has forever banned <@${target.id}> from FutureX Corporate™**\n\n**Reason:** ${reason}`)
                .setTimestamp();

            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(ban1Embed)
        }
    },
    permissions: 'BAN_MEMBERS',
    requiredRoles: [],
}