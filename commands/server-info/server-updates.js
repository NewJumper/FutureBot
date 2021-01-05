const Discord = require('discord.js');

module.exports = {
    commands: ['server-updates', 'updates'],
    expectedArgs: '`*',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides server updates.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**Server Update 2.5.0**')
            .setDescription(`= renamed #*ex-announcements* to <#739146919116406905>
            = rename #*futurex-novel* to <#635989880010309632>
            = moved <#732836634537623563># into ***The Typer*** category
            = moved <#739146919116406905># into ***The Entertainer*** category
            = moved <#635989880010309632># into ***The Storyline*** category
            = updated server introduction and rules
            \n+ added ***The Storyline*** category
            + added voice channel rules`)
            .setFooter('JANUARY 3, 2021');   //UPDATE THE DATE!!!!

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}