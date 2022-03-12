const Commando = require('discord.js-commando')
const Discord = require('discord.js')

const economy = require('./economy')

module.exports = class DailyCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'daily',
            group: 'economy',
            memberName: 'daily',
            description: 'Collect your daily rewards.',
            throttling: {
                usages: 1,
                duration: 86400 // 24 hours
            },
            userPermissions: ['READ_MESSAGE_HISTORY'],
            guildOnly: true,
        })
    }

    async run(message) {
        const bitRandom = Math.round(Math.random() * 20)

        const guildId = message.guild.id
        const userId = message.author.id
        const newBits = await economy.addBits(guildId, userId, bitRandom)

        const daily1Embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor(`${message.author.username}'s Rewards:`, message.author.displayAvatarURL())
            .setDescription(`**You earned**:\n• ${bitRandom} bits\n• ${newBits} total bits`)
            .setTimestamp()

        message.channel.send(daily1Embed)
    }
}