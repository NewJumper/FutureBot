const Levels = require('discord-xp')

module.exports = (client) => {
    client.on('message', async message => {
        if (!message.guild) return
        if (message.author.bot) return

        const randomXp = Math.floor(Math.random() * (27 - 19 + 1)) + 19
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp)
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id)
            message.reply(`you leveled up! You're at Level ${user.level} now!`)
        }
    })
}