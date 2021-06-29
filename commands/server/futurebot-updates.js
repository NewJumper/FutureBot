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
            .setTitle('**FutureBot Update 1.1.1**')
            .setURL('https://github.com/NewJumper/FutureBot/releases')
            .setDescription(`**What's New:**
            = simplified \`-pay\`
            = changed permission checks for \`-daily\` and \`-earnings\`
            = cleaned up code for the release of FutureBot Public Release
            \n+ added \`-gamble\` (testing phase)`)
            .setFooter('June 29, 2021', this.client.user.displayAvatarURL())  //UPDATE THE DATE!!!

        message.channel.send(update1Embed)
        
        const upcomingEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`\n\n**Upcoming:**
            • ranking system (hopefully)
            • a leaderboard to view top players with the highest coins`)

        message.channel.send(upcomingEmbed)
    }
}