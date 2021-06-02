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
            .setTitle('**FutureBot Update 1.1.0**')
            .setURL('https://github.com/NewJumper/FutureBot/releases')
            .setDescription(`**What's New:**
            = updated \`-accept\`
            = updated \`-tempmute\`
            = updated \`-unmute\`
            = replaced *Most commonly used commands* with a table of contents for the **Help Menu**
            = renamed **Math Commands** to **Calculation Commands**
            = fixed embed text within **ROLES** section in <#635515926623551488>
            = updated the following dependencies: \`discord.js\`
            \n+ added \`-daily\`
            + added \`-earnings\`
            + added \`-mute\`
            + added the following dependencies: \`ms\`
            \n- removed \`-add\`
            - removed \`-divide\`
            - removed \`-multiply\`
            - removed \`-power\`
            - removed \`-subtraction\` (these five commands are replaced by using \`-math\`)
            - removed \`-muted\`
            - removed \`mute-schema\`
            - removed \`mutes.js\``)
            .setFooter('June 1, 2021', this.client.user.displayAvatarURL())  //UPDATE THE DATE!!!

        message.channel.send(update1Embed)
        
        const upcomingEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`\n\n**Upcoming:**
            • ranking system
            • easy level ups
            • a leaderboard to view top players with the highest coins`)
            // • a market and a shop feature
            // • ways to buy items and resources via a market or a shop

        message.channel.send(upcomingEmbed)
    }
}