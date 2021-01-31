const Commando = require('discord.js-commando')
const Discord = require('discord.js')

const muteSchema = require('../../schemas/mute-schema')

module.exports = class MutedListCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'muted',
            group: 'moderation',
            memberName: 'muted',
            description: 'View a user\'s mute information.',
            argsType: 'multiple',
            clientPermissions: ['MUTE_MEMBERS'],
            userPermissions: ['MUTE_MEMBERS'],
            guildOnly: true
        })
    }

    async run(message) {
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('specify a user to check for mutes.')
            return
        }

        const members = await message.guild.members.fetch()
        const targetMember = members.get(target.id)
        const isInDiscord = !!targetMember

        const currentMute = await muteSchema.findOne({
            userId: target.id,
            guildId: message.guild.id,
            current: true
        })

        const mlist1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setAuthor(`Mute Info For ${targetMember ? targetMember.user.tag : target.id}`, targetMember ? targetMember.user.displayAvatarURL() : '')
            .addFields(
                { name: 'Currently Muted', value: currentMute ? '\`True\`' : '\`False\`' },
                { name: 'Is In Discord', value: isInDiscord ? '\`True\`' : '\`False\`' }
            )

        if (currentMute) {
            const date = new Date(currentMute.expires)

            let muteReason = currentMute.reason.replace(/_/g, ' ')
            mlist1Embed.addFields(
                { name: 'Muted By', value: `<@${currentMute.staffId}>` },
                { name: 'Mute Reason', value: muteReason },
                { name: 'Mute Expires', value: `${date.toLocaleString()} CST` }
            )
        }

        message.channel.send(mlist1Embed)
    }
}