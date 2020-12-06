const Discord = require('discord.js');

module.exports = {
    commands: ['test'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 0,
    maxArgs: 0,
    description: 'Testing command',
    callback: (message, arguments, text) => {
        message.channel.send(`@everyone A list of all FutureBot updates and bug fixes can be found here:\nhttps://docs.google.com/spreadsheets/d/1-n1b7ckEmjT2iRcsKFClWZg5gmI4jP7wtZUtC0kx-zs/edit?usp=sharing`)
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}