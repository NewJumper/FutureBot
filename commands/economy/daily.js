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
            ownerOnly: true // remove
        })
    }

    async run(message) {
        let coins = 0
        if (message.member.hasPermission('MENTION_EVERYONE')) {
            coins = 2
        } else {
            coins = 1
        }

        const guildId = message.guild.id
        const userId = message.author.id
        const newCoins = await economy.addCoins(guildId, userId, coins)
        
        let coinString = 'coin'
        if (coins === 2) {
            coinString = 'coins'
        }

        // embed?
        const daily1Embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor(`${message.author.username}'s Rewards:`, message.author.displayAvatarURL())
            .setDescription(`**You earned**:\n• ${coins.toString()} ${coinString}\n\nYou now have ${newCoins} coins.`)
            .setTimestamp()

        message.channel.send(daily1Embed)
    }
}