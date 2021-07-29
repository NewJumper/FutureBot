const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class MuteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'mute',
            group: 'moderation',
            memberName: 'mute',
            description: 'Mutes a specified user.',
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
            message.reply('specify a user to mute.')
            return
        }

        const mutedRole = message.guild.roles.cache.find(role => role.id === '800130999152410674')
        if (!mutedRole) {
            message.reply('there is no \`muted\` role.')
            return
        }

        let reason = args.slice(1).join(" ")
        if (!reason) reason = 'unknown'

        const mute1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🔇 MUTED')
            .setDescription(`**<@${target.id}> was muted!**
            \n**Reason**: ${reason}`)
            .setTimestamp()
        
        message.channel.send(mute1Embed)
        const member = message.mentions.members.first()
        member.roles.add(mutedRole)
    }
}