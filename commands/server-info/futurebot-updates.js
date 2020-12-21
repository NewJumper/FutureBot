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
            .setTitle('**FutureBot Update 0.13.1**')
            .setDescription(`= bug fixes (\`FB006\`)
            = updated \`-ping\`
            = updated \`-help\` imports
            = updated \`profileSchema\`
            = updated \`.gitignore\`
            = organized command info (\`expectedArgs\`, \`description\`, and \`permissionError\`)
            = updated Mongo connection (uses only one connection)
            = updated the following \`dependencies\`: \`mongoose\`
            \n+ added \`-cube-root\`
            + added \`-pi\`
            + added \`-power\`
            + added \`-square-root\`
            + added leveling functionality (cannot currently check what \`level\` you're on and how much \`xp\` you have)
            + added a new folder for expanded server commands
            + ability to use \`-help <command>\` works
            \n- removed warn functionality
            - deleted \`warnSchema\`
            - uninstalled the following \`dependencies\`: \`discord-xp\``)
            .setFooter('DECEMBER 21, 2020');   //UPDATE THE DATE!!!!

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}