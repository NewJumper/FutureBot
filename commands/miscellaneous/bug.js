const Discord = require('discord.js');

module.exports = {
    commands: ['bug', 'issue'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'Use to report any bugs or issues with FutureBot.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const bug1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Report a Bug')
            .setURL('https://forms.gle/75qmDbambLWuM4By9')

        message.channel.send(bug1Embed)
    },
    permissions: [],
    requiredRoles: [],
}