const Commando = require('discord.js-commando')
const Discord = require('discord.js')

const ms = require('ms')

module.exports = class TempmuteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'tempmute',
            group: 'moderation',
            memberName: 'tempmute',
            description: 'Temporarily mutes a specified user.',
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

        let mutedLength = args[1]
        if (!mutedLength) {
            message.reply('specify a length for the mute.')
            return
        }

        let reason = args.slice(2).join(" ")
        if (!reason) reason = 'unknown'

        const tempmute1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🔇 MUTED')
            .setDescription(`**<@${target.id}> was muted for ${ms(ms(mutedLength))}**
            \n**Reason**: ${reason}`)
            .setTimestamp()

        message.channel.send(tempmute1Embed)
        const member = message.mentions.members.first()
        member.roles.add(mutedRole)

        setTimeout(function() {
            const tempmute2Embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('🔊 UNMUTED')
                .setDescription(`**<@${target.id}> is now unmuted!**`)
                .setTimestamp()
                
            message.channel.send(tempmute2Embed)
            const member = message.mentions.members.first()
            member.roles.remove(mutedRole)
        }, ms(mutedLength))
    }
}