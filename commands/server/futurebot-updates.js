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
            .setTitle('**FutureBot Update 0.13.0**')
            .setDescription(`= bug fixes (\`FB003\`, \`FB004\`)
            = changed FutureBot's description to be more accurate
            = changed FutureBot's status (switched back to \`.setActivity\` instead of \`.setStatus\`)
            = split the **rules** and **roles** embeds to two seperate files for better file fetching: \`rules\` and \`roles\`
            = renamed \`headquarters\` to \`rules\`
            = updated \`-help\`; although, it still has some issues
            = renamed \`updates\` to \`server-updates\`
            = leveling system in progress
            \n+ added economy commands such as \`-balance\` and \`-pay\`
            + added a \`-bug\` command for anyone to use to report any issues with FutureBot
            + added \`-roles\`
            + added \`profile-schema\`
            + added a connection to a remote MongoDB server
            \n- terminated connection to MongoDB Compass`)
            .setFooter('NOVEMBER 29, 2020');

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}