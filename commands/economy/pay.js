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
            description: 'Pay a user a certain amount of bits.',
            argsType: 'multiple',
            guildOnly: true
        })
    }

    async run(message, args) {
        const { guild, member } = message
        
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('specify a user to give bits to.')
            return
        }

        const payment = args[1]
        if (payment < 0) {
            return
        }

        if (isNaN(payment)) {
            message.reply(`specify an amount of bits you want to give <@${target.id}>.`)
            return
        }

        const bitsOwned = await economy.getBits(guild.id, member.id)
        if (bitsOwned < payment) {
            message.reply(`you do not have ${payment} bits!`)
            return
        }

        const remainingBits = await economy.addBits(
            guild.id,
            member.id,
            payment * -1
        )
        const newBalance = await economy.addBits(
            guild.id,
            target.id,
            payment
        )

        const pay1Embed = new Discord.MessageEmbed()
            .setColor('GOLD')
            .setTitle('TRANSACTION COMPLETE')
            .setDescription(`<@${message.author.id}> has given <@${target.id}> **${payment}** bits!
            \n<@${target.id}> now has **${newBalance}** bits
            <@${message.author.id}> now has **${remainingBits}** bits`)
            .setTimestamp()

        message.channel.send(pay1Embed)
    }
}