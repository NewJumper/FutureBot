const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class FuturebotUpdatesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'futurebot-updates',
            aliases: ['bot-updates'],
            group: 'server',
            memberName: 'futurebot-updates',
            description: 'FutureBot updates and patch notes.',
            userPermissions: ['ADMINISTRATOR'],
            guildOnly: true
        })
    }

    async run(message) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureBot Update 1.2.0**')
            .setURL('https://github.com/NewJumper/FutureBot/releases')
            .setDescription(`**What's New:**
            = bug fixes (\`FB014\`, \`FB015\`)
            = simplified \`-pay\`
            = added a limit to \`-change-balance\` up to the 64 bit integer (2^64)
            = updated \`-random\` to be able to pick a number between *x* and *y* (specified by user)
            = modified all mute commands to check for the muted role via the role \`id\`
            = changed permission checks for \`-daily\` and \`-earnings\`
            = \`-daily\` is disabled until permissions are resolved (\`-earnings\` info will be wrong)
            = \`-gamble\` will remain a testing command
            = updated dependencies count in \`-debug\`
            = reorganized and renamed the menus in \`-help\`
            = updated \`profile-schema.js\`
            = updated \`.gitignore\`
            = fixed typos
            = cleaned up code for release of FutureBot Public Release 1
            \n+ added a ranking system (**B**)
            + added \`-rank\`
            + added \`-xp-leaderboard\` (**A**)
            + added \`-gamble\` (**A**)
            + added \`-gamble\` to the **Economy** page in \`-help\`
            + added a **Levels & XP** menu to \`-help\`
            + added **Labels** to the Help Menu
            + new command labels for changelogs:
            (**A**) - the command/function is in an Alpha stage and only accessible to the owner
            (**B**) - the command/function is in a Beta stage, can be accessible by everyone but it may have bugs
            + added a bit more helpfulness to the failed \`-math\` response`)
            .setFooter('July 29, 2021', this.client.user.displayAvatarURL())  //UPDATE THE DATE!!!

        message.channel.send(update1Embed)
        
        const upcomingEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`\n\n**Upcoming:**
            • a leaderboard to view top players with the highest coins`)

        message.channel.send(upcomingEmbed)
    }
}