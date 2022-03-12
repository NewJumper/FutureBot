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
            .setTitle('**FutureBot Update 1.3.0**')
            .setURL('https://github.com/NewJumper/FutureBot/releases')
            .setDescription(`**What's New:**
            = renamed coins to **bits**
            = modified \`-daily\`; now gives a random amount of coins between 1 and 20 daily
            = updated \`.gitignore\`
            = updated security of FutureBot
            = updated dependencies
            \n- removed \`-earnings\`
            - removed \`-gamble\` for now`)
            .setFooter('July 31, 2021', this.client.user.displayAvatarURL())  //UPDATE THE DATE!!!

        message.channel.send(update1Embed)
        
        const upcomingEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`\n\n**Upcoming:**
            • new coin types...?? :)
            • a leaderboard to view top players with the highest coins
            • markets / shops / bank`)

        message.channel.send(upcomingEmbed)
    }
}