const Discord = require('discord.js');

module.exports = {
    commands: ['futurebot-updates', 'f-updates', 'bot-updates'],
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
            .setTitle('**FutureBot Update 0.12.0**')
            .setDescription(`= bug fixes
            = getting a hosting service worked out
            = new and better command handler
            = better file organization and reduced file sizes
            = improved \`-random\` (or \`-rng\` if you prefer) command as it had some issues with the new command handler
            = working out \`expectedArgs\` for all commands
            \n+ integrated a private GitHub repository to FutureBot
            + added new private commands (admins, DM <@627933033596583957> for more info)
            + added new commands (like math commands)
            + created an end process
            + connected to a Mongo cluster (which doesn't work yet)
            + added new \`Dependencies\`
            \n- removed the leveling system entirely (it's a work in progress)
            - \`-help\` is currently being finalized to look good and organized (will be available in update 0.12.1)
            - removed **Heroku** hosting, as it didn't work out too well`)
            .setFooter('NOVEMBER 18, 2020');

        message.channel.send(update1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}