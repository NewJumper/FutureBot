const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class PingCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'utility',
            memberName: 'ping',
            description: 'Checks the bot\'s and API\'s ping.',
            throttling: {
                usages: 2,
                duration: 10
            }
        })
    }

    async run(message) {
        message.channel.send('Calculating ping...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            const ping1Embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`Bot Latency: ${ping}ms\nAPI Latency: ${this.client.ws.ping}ms`)
            
            const ping2Embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Bot Latency: ${ping}ms\nAPI Latency: ${this.client.ws.ping}ms`)

            resultMessage.delete()

            if (ping >= '1000') {
                message.channel.send(ping1Embed)
            } else {
                message.channel.send(ping2Embed)
            }
        })
    }
}