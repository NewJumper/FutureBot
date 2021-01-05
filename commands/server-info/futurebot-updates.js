const Discord = require('discord.js');

module.exports = {
    commands: ['futurebot-updates', 'f-updates', 'bot-updates'],
    expectedArgs: '`*',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides FutureBot updates.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureBot Update 0.15.1.1**')
            .setDescription(`= fixed a pinging issue
            = fixed the \`expectedArgs\` of commands that had "by itself"`)
            .setFooter('JANUARY 5, 2021');   //UPDATE THE DATE!!!

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}