const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const Levels = require('discord-xp')

module.exports = class RankCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'rank',
            aliases: ['level'],
            group: 'ranking',
            memberName: 'rank',
            description: 'View your\'s or another user\'s level and xp.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const target = message.mentions.users.first() || message.author
        const user = await Levels.fetch(target.id, message.guild.id)

        const rankEmbed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('Level and XP')
            .setDescription(`**Level**: ${user.level}
            **XP**: ${user.xp} / ${Levels.xpFor(user.level + 1)}`)
            .setTimestamp()

        message.channel.send(rankEmbed)
    }
}