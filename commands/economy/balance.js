const economy = require('../../economy')

module.exports = {
    commands: ['balance', 'bal'],
    expectedArgs: '',
    maxArgs: 1,
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const guildId = message.guild.id
        const userId = target.id

        const coins = await economy.getCoins(guildId, userId)

        message.channel.send(`That user has ${coins} coins!`)
    },
}