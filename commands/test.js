const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
/*const file = new Discord.MessageAttachment('./images/fxcwall.png');*/

module.exports = {
    commands: ['test'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: null,
    maxArgs: null,
    description: 'A testing command.',
    callback: (message, arguments, text) => {
        message.channel.send(`\`Complete\``)
    },
    permissions: [],
    requiredRoles: ['◎ Beta Testers'],
}