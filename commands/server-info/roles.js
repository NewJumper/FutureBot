const Discord = require('discord.js')

module.exports = {
    commands: ['roles'],
    expectedArgs: 'by itself',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'Server roles and their info.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
            .catch(console.error);
            
        // message.channel.send(`\`\`\`ini\n                          [ ROLES ]\`\`\``);

        const role1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**ROLES**')
            .setDescription(`<@&631326468634443778> : The admins of the server with full access to everything.
            \n<@&631325955817996288> : The moderators of the server that watch over it for any rude, suspicious, and/or disrespective activities.
            \n<@&712351772538306680> : Discord bots within this server.
            \n<@&758352051851362336> : The Developer team behind the making of <@743588174244348064>.
            \n<@&760286668879036466> : People who have been here from the start and have helped this server grow as a community.
            \n<@&631325561435848745> : People who have gained the admins' and moderators' trust. They don't have moderation powers, but they have contributed to improving the server to an extent. You have more of a chance to be accepted as a mod if you have this role.
            \n<@&789696209786896424> : The general people, Levels 200+
            \n<@&766064012257263686> : The general people, Levels 150 - 199
            \n<@&766064287880839199> : The general people, Levels 100 - 149
            \n<@&766064174337490974> : The general people, Levels 50 - 99
            \n<@&766062864690970654> : The general people, Levels 25 - 49
            \n<@&766061679103574066> : The general people, Levels 10 - 24
            \n<@&789691739027668992> : The general people, Levels 5 - 9
            \n<@&631324009874718736> : The general people, Levels 1 - 4
            \n<@&757609210983874620> : People who have done something wrong and now cannot mention anyone or react to a message.
            \n<@&635282473101819906> : People who are muted because they have not followed the rules.`)
            .setFooter('Read channel from top to bottom');

        message.channel.send(role1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}