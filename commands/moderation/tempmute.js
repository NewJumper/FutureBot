const Commando = require('discord.js-commando')
const Discord = require('discord.js')

const muteSchema = require('../../schemas/mute-schema')
const reasons = {
    spamming: 1,
    mass_mentions: 1,
    advertising: 2,
    offensive_languages: 3,
    avoiding_penalties: 5
}

module.exports = class TempmuteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'tempmute',
            aliases: ['mute'],
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
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('specify a user to temporarily mute.').to
            return
        }

        const reason = args[1]
        if (!reasons[reason]) {
            let validReasons = ''
            for (const key in reasons) {
                validReasons += `\`${key}\`, `
            }
            validReasons = validReasons.substr(0, validReasons.length - 2)

            message.reply(`you inputted an unknown reason, only the following are registered: ${validReasons}. Contact <@627933033596583957> if an unlisted reason needs to be added.`)
            return
        }

        const previousMutes = await muteSchema.find({
            userId: target.id
        })

        const currentlyMuted = previousMutes.filter(mute => {
            return mute.current === true
        })
        if (currentlyMuted.length) {
            message.reply(`<@${target.id}> is already muted. Bummer... :|`)
            return
        }

        let duration = reasons[reason]
        //  * (previousMutes.length + 1)    < that statement goes with let duration = reasons[reason]... * (previousMutes.length...)

        const expires = new Date()
        expires.setHours(expires.getHours() + duration)

        const mutedRole = message.guild.roles.cache.find(role => {
            return role.name === '▥ In Prison'
        })
        if (!mutedRole) {
            message.reply(`couldn't find the \`muted\` role. Contact <@627933033596583957> for more info.`)
            return
        }

        const targetMember = (await message.guild.members.fetch()).get(target.id)
        targetMember.roles.add(mutedRole)

        await new muteSchema({
            userId: target.id,
            guildId: message.guild.id,
            reason,
            staffId: message.author.id,
            staffTag: message.author.tag,
            expires,
            current: true
        }).save()

        const mutedLength = parseInt(duration)
        const tempmute1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${target.tag} is now muted!`, target.displayAvatarURL())
            .setDescription(`**Reason**: ${reason}
            **Length**: ${duration} hour`)
            .setTimestamp()
        
        const tempmute2Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${target.tag} is now muted!`, target.displayAvatarURL())
            .setDescription(`**Reason**: ${reason}
            **Length**: ${duration} hours`)
            .setTimestamp()
        
        if (mutedLength <= 1) {
            message.channel.send(tempmute1Embed)
        } else if (mutedLength > 1) {
            message.channel.send(tempmute2Embed)
        }
    }
}