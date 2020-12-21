const economy = require('../../economy')

module.exports = {
    commands: ['balance', 'bal'],
    expectedArgs: '*`@user`* or by itself',
    maxArgs: 1,
    description: 'View your\'s or a specified user\'s balance.',
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const guildId = message.guild.id
        const userId = target.id

        const coins = await economy.getCoins(guildId, userId)

        message.channel.send(`<@${userId}> has ${coins} coins!`)
    },
}