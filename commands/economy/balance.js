const Commando = require('discord.js-commando')
const Discord = require('discord.js')

const economy = require('./economy')

module.exports = class BalanceCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'balance',
            aliases: ['bal'],
            group: 'economy',
            memberName: 'balance',
            description: 'View your\'s or another user\'s coin balance.'
        })
    }

    async run(message) {
        const target = message.mentions.users.first() || message.author

        const guildId = message.guild.id
        const userId = target.id

        const coins = await economy.getCoins(guildId, userId)

        const balance1Embed = new Discord.MessageEmbed()
            .setColor('GOLD')
            .setDescription(`<@${userId}> has ${coins} coins!`)

        message.channel.send(balance1Embed)
    }
}