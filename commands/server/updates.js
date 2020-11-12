const Discord = require('discord.js');

module.exports = {
    commands: ['updates', 'server-updates'],
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
            .setTitle('**Server Update 2.3.0** (The Pre-FutureBot Update)')
            .setDescription(`= everyone has <@&631324009874718736> role as the default role
            = changed @*Sector* to <@&631325561435848745> 
            = tweaked permissions of a few roles
            = changed descriptions of all text channels
            = reloaded emojis
            
            + added new emojis
            + added <@&631324009874718736>
            + added <@&766061679103574066>
            + added <@&766062864690970654> 
            + added <@&766064174337490974>
            + added <@&766064287880839199>
            + added <@&766064012257263686> 
            + added <@&763412201427697725>
            + added logos for all **SECTOR** roles
            
            - deleted @*Place*
            - deleted @*lols*`)
            .setFooter('NOVEMBER 5, 2020');

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}