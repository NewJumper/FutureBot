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
            .setTitle('**FutureBot Update 1.2.1**')
            .setURL('https://github.com/NewJumper/FutureBot/releases')
            .setDescription(`**What's New:**
            = updated and renamed \`profile-schema\` to \`economy-schema\`
            = updated \`economy.js\`
            = renamed miscellaneous folder and group to utility to match the Help Menu`)
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