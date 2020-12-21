const Discord = require('discord.js');

module.exports = {
    commands: ['ping', 'latency'],
    expectedArgs: 'by itself',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'A command to check the ping/latency of the bot and API',
    callback: (message, arguments, text, client) => {
        message.channel.send('Calculation ping...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            const ping1Embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`Bot Latency: ${ping}ms\nAPI Latency: ${client.ws.ping}ms`)

            const ping2Embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Bot Latency: ${ping}ms\nAPI Latency: ${client.ws.ping}ms`)

            resultMessage.delete();
            if (ping >= '500') {
                message.channel.send(ping1Embed)
            } else {
                message.channel.send(ping2Embed)
            }
        })
    },
    permissions: [],
    requiredRoles: [],
}  