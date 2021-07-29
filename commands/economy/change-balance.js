const Commando = require('discord.js-commando')

const economy = require('./economy')

module.exports = class ChangeBalanceCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'change-balance',
            aliases: ['chgbal'],
            group: 'economy',
            memberName: 'change-balance',
            description: 'Give or take coins away from a specified user.',
            argsType: 'multiple',
            userPermissions: ['ADMINISTRATOR'],
            guildOnly: true
        })
    }

    async run(message, args) {
        const mention = message.mentions.users.first()

        if (!mention) {
            message.reply('specify a user.')
            return
        }

        const coins = args[1]
        if (isNaN(coins)) {
            message.reply('specify a valid number of coins to give or take.')
            return
        }
        if (coins >= Math.pow(2, 64)) {
            message.reply('that\'s too high of a number!')
            return
        }

        const guildId = message.guild.id
        const userId = mention.id

        const newCoins = await economy.addCoins(guildId, userId, coins)

        const changes = args[1].split("")

        if (changes[0] === '-') {
            const negativeAmount = changes.slice(1).join("")
            message.channel.send(`<@${userId}> got ${negativeAmount} coins taken away, they now have ${newCoins} coins.`)
        } else if (changes[0] === '+') {
            const positiveAmount = changes.slice(1).join("")
            message.channel.send(`<@${userId}> earned ${positiveAmount} coins, they now have ${newCoins} coins!`)
        } else {
            message.channel.send(`<@${userId}> earned ${coins} coins, they now have ${newCoins} coins!`)
        }
    }
}