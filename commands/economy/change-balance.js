const Commando = require('discord.js-commando')

const economy = require('./economy')

module.exports = class ChangeBalanceCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'change-balance',
            aliases: ['chgbal'],
            group: 'economy',
            memberName: 'change-balance',
            description: 'Give or take bits away from a specified user.',
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

        const bits = args[1]
        if (isNaN(bits)) {
            message.reply('specify a valid amount of bits to give or take.')
            return
        }
        if (bits >= Math.pow(2, 64)) {
            message.reply('that\'s too high of a number!')
            return
        }

        const guildId = message.guild.id
        const userId = mention.id

        const newBits = await economy.addBits(guildId, userId, bits)

        const changes = args[1].split("")

        if (changes[0] === '-') {
            const negativeAmount = changes.slice(1).join("")
            message.channel.send(`<@${userId}> got ${negativeAmount} bits taken away, they now have ${newBits} bits.`)
        } else if (changes[0] === '+') {
            const positiveAmount = changes.slice(1).join("")
            message.channel.send(`<@${userId}> earned ${positiveAmount} bits, they now have ${newBits} bits!`)
        } else {
            message.channel.send(`<@${userId}> earned ${bits} bits, they now have ${newBits} bits!`)
        }
    }
}