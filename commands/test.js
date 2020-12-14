const Discord = require('discord.js');

module.exports = {
    commands: ['test'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 0,
    maxArgs: null,
    description: 'Testing command',
    callback: (message, arguments, text) => {
        if (arguments[0] < 0) {
            message.channel.send('positive')
        } else if (arguments[0] >= 0) {
            messae.channel.send('negative')
        }
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}
