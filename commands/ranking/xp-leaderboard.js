const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const Levels = require('discord-xp')

const client = new Commando.CommandoClient({
    owner: '627933033596583957',
    commandPrefix: '-'
})

module.exports = class RankCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'xp-leaderboard',
            aliases: ['xpl'],
            group: 'ranking',
            memberName: 'xp-leaderboard',
            description: 'View your\'s or another user\'s level and xp.',
            argsType: 'multiple',
            ownerOnly: true
        })
    }

    async run(message, args) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5)
        if (rawLeaderboard.length < 1) {
            message.reply('No one is on the leaderboard yet.')
            return
        }

        // const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard)
        // const leaderboardMap = leaderboard.map(e => `**[${e.position}]** ${e.username}#${e.discriminator}\n**Level**: ${e.level}\n**XP**: ${e.xp.toLocaleString()}`);

        // message.channel.send(`${leaderboardMap.join("\n\n")}`)

        await Levels.computeLeaderboard(client, rawLeaderboard).then((users) => {
            const leaderboardEmbed = new Discord.MessageEmbed()
                .setColor('#1b70bf')
                .setTitle(`Levels Leaderboard`)
    
            users.map(async(user)  => {
            leaderboardEmbed.addFields(
            { name: `${user.username}`, value: `**Rank**: #${user.position}\n**Level**: ${user.level}\n**XP**: ${user.xp.toLocaleString()}` })
            });
    
            message.channel.send(leaderboardEmbed)
        })
    }
}