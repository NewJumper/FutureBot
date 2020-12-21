const Discord = require('discord.js');

module.exports = {
    commands: ['server-updates', 'updates'],
    expectedArgs: 'by itself',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides server updates.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**Server Update 2.4.0**')
            .setDescription(`= updated the colors of the server roles
            = changed <@&755947356104556685> role color to a slightly brighter hue to be able to differentiate between <@&763412201427697725> 
            = rearranged role hierarchy
            \n+ added <@&631324009874718736> as the new starter role
            + added <@&789696209786896424> as the new max leveling role
            + added <@&789714304118030346> for any Nitro Boosters (just here for those rare cases)
            \n- deleted #*roles-list*`)
            .setFooter('DECEMBER 21, 2020');

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}