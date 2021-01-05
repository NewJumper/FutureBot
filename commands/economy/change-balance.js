const economy = require('../../economy')

module.exports = {
    commands: ['change-balance', 'change-bal', 'changebal', 'chg-bal', 'chgbal'],
    expectedArgs: '@user <amount>`*',
    minArgs: 2,
    maxArgs: 2,
    permissions: 'ADMINISTRATOR',
    description: 'Give or take coins away from specified users.',
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

        if (coins < 0) {
            message.channel.send(`<@${userId}> lost ${coins}. They now have ${newCoins} coins.`)
        } else {
            message.channel.send(`<@${userId}> gained ${coins}. They now have ${newCoins} coins!`)
        }
    },
}