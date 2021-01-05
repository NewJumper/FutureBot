const Discord = require('discord.js');

module.exports = {
    commands: ['test'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    description: 'Testing command',
    callback: (message, arguments, text, client) => {
        const test1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('test title')
            .setAuthor('test author', client.user.displayAvatarURL(), 'https://discord.js.org')

        message.channel.send(test1Embed)
        },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}