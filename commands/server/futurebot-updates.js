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
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['ADMINISTRATOR'],
            guildOnly: true
        })
    }

    async run(message) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureBot Update 1.0.1**')
            .setURL('https://github.com/NewJumper/FutureBot/releases')
            .setDescription(`**What's New:**
            = bug fixes (\`FB002\`, \`FB009\`, \`FB010\`, \`FB011\`, \`FB012\`, \`FB013\`)
            = updated all of FutureBot's commands to work with the Commando Framework
            = FutureBot has a new profile picture (or logo, whichever seems suitable)
            = \`Node.js\` updated to version \`14.15.4\`
            = npm packages updated to version \`6.14.10\`
            = updated ***\`-help\`*** and ***\`-debug\`***'s embed style
            = made ***\`-help\`*** more visually appealing and less clustered with a new dynamic **Help Center**
            = updated changes to ***\`-ping\`***, changed the "red embed strip" from 150ms to 1s
            = made ***\`-ping\`*** and ***\`-debug\`*** only usable twice every 10 seconds
            = fixed typos within \`debug.js\`, \`index.js\`, and \`ping.js\`
            = updated all variables of \`package\` to \`mainpkg\`
            = updated all \`client\` values to \`this.client\`
            = most commands now have either none or just one alias
            = commands with **\`-\`** spearating their names can now be used without the dash, (the prefix is still required though)
            = replace the old muted role's \`ID\` with the new role's \`ID\`
            = updated the following \`dependencies\`: \`discord.js\`, \`mongoose\``)
            
        const update2Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setDescription(`+ new command handler, from now to be called the Commando Framework
            + publicly released FutureBot's source code on GitHub
            + added ***\`-math\`***
            + added ***\`-muted\`***
            + added ***\`-tempmute\`***
            + added ***\`-unmute\`***
            + added ***\`mutes.js\`*** to help handle who is and isn't muted
            + added \`.env\` as a replacement for \`config.json\`
            + added \`TSLR\` (Time Since Last Restart) to ***\`-debug\`***
            + using these math commands: ***\`-add\`***, ***\`-subtract\`***, ***\`-multiply\`***, and ***\`-divide\`***, each numeric value is now incremented or decremented to the previous value
            + added a clickable title to FutureBot update embeds (click ***FutureBot Update 1.0.1***) that takes you to the FutureBot's GitHub releases page
            + added an **Upcoming** section along with FutureBot release notes (see down below) for any upcoming additions and/or changes
            + added \`.env\` to \`.gitignore\`
            + added the following \`dependencies\`: \`discord.js-commando\`, \`discord.js-menu\`, \`dotenv\`
            \n- removed \`config.json\`
            - removed the "*incorrect syntax*" message
            - removed \`Uptime\` from ***\`-debug\`***
            - removed \`server-info\` command group, merged all commands within that group into \`server\`
            - removed all leveling functionalities and messages due to a bug
            - removed the following \`dependencies\`: \`ms\`, \`random\``)
            .setFooter('JANUARY 30, 2021', this.client.user.displayAvatarURL())  //UPDATE THE DATE!!!
        
        const update3Embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`\n\n**Upcoming:**
            • emojis within mute and unmute embeds
            • a leaderboard to view top players with the highest coins
            • ways to earn coins`)
            // • a ranking system
            // • a market and a shop feature
            // • ways to buy items and resources via a market or a shop

        message.channel.send(update1Embed)
        message.channel.send(update2Embed)
        message.channel.send(update3Embed)
    }
}