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
            description: 'View your\'s or another user\'s bits.'
        })
    }

    async run(message) {
        const target = message.mentions.users.first() || message.author

        const guildId = message.guild.id
        const userId = target.id

        const bits = await economy.getBits(guildId, userId)

        const balance1Embed = new Discord.MessageEmbed()
            .setColor('GOLD')
            .setDescription(`<@${userId}> has ${bits} bits!`)

        message.channel.send(balance1Embed)
    }
}