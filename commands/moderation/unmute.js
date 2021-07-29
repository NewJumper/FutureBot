const Commando = require('discord.js-commando')
const Discord = require('discord.js')

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
        message.channel.bulkDelete(1)
        .catch(console.error);

        const target = message.mentions.users.first()
        if (!target) {
            message.reply('specify a user.')
            return
        }

        const mutedRole = message.guild.roles.cache.find(role => role.id === '800130999152410674')
        if (!mutedRole) {
            message.reply('there is no \`muted\` role.')
            return
        }

        const unmute1Embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('🔊 UNMUTED')
            .setDescription(`**<@${target.id}> is now unmuted!**`)
            .setTimestamp()
        
        message.channel.send(unmute1Embed)
        const member = message.mentions.members.first()
        member.roles.remove(mutedRole)
    }
}