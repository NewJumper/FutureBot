const economy = require('../../economy')

module.exports = {
    commands: ['add-balance', 'add-bal', 'addbalance', 'addbal'],
    expectedArgs: '',
    minArgs: 2,
    maxArgs: 2,
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments) => {
        const mention = message.mentions.users.first()

        if (!mention) {
            message.channel.send('Tag a user')
            return
        }

        const coins = arguments[1]
        if (isNaN(coins)) {
            message.channel.send('Provide a valid number')
            return
        }

        const guildId = message.guild.id
        const userId = mention.id

        const newCoins = await economy.addCoins(guildId, userId, coins)

        message.channel.send(`<@${userId}> gained ${coins}. They now have ${newCoins} coins!`)
    },
}