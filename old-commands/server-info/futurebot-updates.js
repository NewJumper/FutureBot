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
            .setTitle('**FutureBot Update 1.0.0**')
            .setDescription(`FutureBot is finally out with its first official version out of its BETA phase. With FutureBot being in version 1.0, it brings a whole new, better than before FutureBot to the table. blah blahb lahb.
            \n= bug fixes (\`\`)
            \n+ new command handler called the Commando Framework
            \n- removed all leveling functionalities and messages due to a bug
            - removed the "incorrect syntax" message, from now on \`-help <command>\` can be used`)
            .setFooter('JANUARY 5, 2021');   //UPDATE THE DATE!!!

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}