const Discord = require('discord.js');

module.exports = {
    commands: ['test'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    description: 'Testing command',
    callback: (message, arguments, text) => {
        let args = arguments.slice(0).join(" ")
        if (!args) args = "_ _"

        message.channel.send(args)
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}