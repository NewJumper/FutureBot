const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class EarningsCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'earnings',
            group: 'economy',
            memberName: 'earnings',
            description: 'View how much money you make daily (when using `-daily`).'
        })
    }

    async run(message) {
        const earnings1Embed = new Discord.MessageEmbed()
            .setColor(message.member.displayHexColor)
            .setAuthor(`Earnings for ${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription('**1 coin** every 24 hours\n**2 XP** every 24 hours *(to be integrated)*')

        const earnings2Embed = new Discord.MessageEmbed()
            .setColor(message.member.displayHexColor)
            .setAuthor(`Earnings for ${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription('**2 coins** every 24 hours\n**5 XP** every 24 hours *(to be integrated)*')

        if (message.member.hasPermission('MENTION_EVERYONE')) {
            message.channel.send(earnings2Embed)
        } else {
            message.channel.send(earnings1Embed)
        }
    }
}