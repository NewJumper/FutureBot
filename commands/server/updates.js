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
            .setTitle('**Server Update 2.3.1**')
            .setDescription(`+ added #📈▸futurebot-updates 
            + added emojis to Category names
            + added unicode characters to all role names (@₪  Corporate @◈ Division @⌬ What About Dem Bots @✦ OG @▽ Sector 289 @△ Sector 026 @▥ In Prison)`)
            .setFooter('NOVEMBER 13, 2020');

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}