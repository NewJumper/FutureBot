const Commando = require('discord.js-commando')
const Discord = require('discord.js')

const economy = require('./economy')

module.exports = class PayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pay',
            aliases: ['give'],
            group: 'economy',
            memberName: 'pay',
            description: 'Pay a user a certain amount of coins.',
            argsType: 'multiple',
            guildOnly: true
        })
    }

    async run(message, args) {
        const { guild, member } = message
        
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('specify a user to give coins to.')
            return
        }

        const payment = args[1]
        if (payment < 0) {
            message.reply('you can\'t rob anyone!!! yet...')
            return
        }

        if (isNaN(payment)) {
            message.reply(`specify an amount of coins you want to give <@${target.id}>.`)
            return
        }

        const coinsOwned = await economy.getCoins(guild.id, member.id)
        if (coinsOwned < payment) {
            message.reply(`you do not have ${payment} coins!`)
            return
        }

        const remainingCoins = await economy.addCoins(
            guild.id,
            member.id,
            payment * -1
        )
        const newBalance = await economy.addCoins(
            guild.id,
            target.id,
            payment
        )

        const pay1Embed = new Discord.MessageEmbed()
            .setColor('GOLD')
            .setTitle('TRANSACTION COMPLETE')
            .setDescription(`<@${message.author.id}> has given <@${target.id}> **${payment}** coins!
            \n<@${target.id}> now has **${newBalance}** coins
            <@${message.author.id}> now has **${remainingCoins}** coins`)
            .setTimestamp()

        message.channel.send(pay1Embed)
    }
}