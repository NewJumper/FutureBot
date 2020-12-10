const Discord = require('discord.js');

module.exports = {
    commands: ['futurebot-updates', 'f-updates', 'bot-updates'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides FutureBot updates.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureBot Update 0.13.1**')
            .setDescription(`= bug fixes (\`FB005\`)
            = updated commands list and order for \`-help\` (\`-help <command>\` is currently disabled)
            = renamed \`-add-balance\` to \`-change-balance\`
            = \`warn\` functionalities are in progress
            = updated Mongoose connections
            \n+ added \`-ping\`
            + added \`-warn\`
            + added \`-list-warnings\`
            + added \`-send\`
            + added \`warnSchema\``)
            .setFooter('DECEMBER 10, 2020');   //UPDATE THE DATE!!!!

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}