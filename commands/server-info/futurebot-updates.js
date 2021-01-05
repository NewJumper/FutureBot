const Discord = require('discord.js');

module.exports = {
    commands: ['futurebot-updates', 'f-updates', 'bot-updates'],
    expectedArgs: 'by itself',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides FutureBot updates.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureBot Update 0.15.1**')
            .setDescription(`= bug fixes (\`FB008\`)
            = updated FutureBot's description
            = updated \`level.js\` to ignore bots when giving \`xp\`
            = simplified \`help.js\` so it's less complex (by 9 lines of code! yay!)
            = updated the looks of \`-help\` and \`-help <command>\`
            = renamed **Proper Usage** to **Usage** when using \`-help <command>\`
            = updated the gaps between each rule/role section in <#635515926623551488>
            \n+ added \`-debug\`
            + added the prefix with the main command within the **Usage** section when using \`-help <command>\`
            + added the following \`dependencies\`: \`os\`
            \n- removed \`-server\`
            - removed \`permissionError\`
            - disabled ability to earn a level-up role (i.e <@&789691739027668992>, <#&766064174337490974>, etc.) due to a bug
            - removed the following \`dependencies\`: \`jsonfile\``)
            .setFooter('JANUARY 5, 2021');   //UPDATE THE DATE!!!

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}