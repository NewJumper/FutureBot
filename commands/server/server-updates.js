const Discord = require('discord.js');

module.exports = {
    commands: ['server-updates', 'updates'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides server updates.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**Server Update 2.3.2**')
            .setDescription(`= changed #*futurebot-testing* to <#715969770310205613>
            \n+ added <#782675412986626058> `)
            .setFooter('DECEMBER 5, 2020');

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}