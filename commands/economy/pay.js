const economy = require("../../economy")

module.exports = {
    commands: ['pay', 'give'],
    expectedArgs: '@user <amount>`*',
    minArgs: 2,
    maxArgs: 2,
    callback: async (message, arguments, text) => {
        const { guild, member } = message

        const target = message.mentions.users.first()
        if (!target) {
            message.channel.send('Specify someone to give coins to.')
            return
        }

        const coinsToGive = arguments[1]
        if (coinsToGive < 0) {
            message.reply('you can\'t rob anyone!!! yet...')
        } else {
            if (isNaN(coinsToGive)) {
                message.channel.send('Provide a valid number of coins to give.')
                return
            }

            const coinsOwned = await economy.getCoins(guild.id, member.id)
            if (coinsOwned < coinsToGive) {
                message.channel.send(`You do not have ${coinsToGive} coins.`)
                return
            }

            const remainingCoins = await economy.addCoins(
                guild.id,
                member.id,
                coinsToGive * -1
            )
            const newBalance = await economy.addCoins(
                guild.id,
                target.id,
                coinsToGive
            )

            message.reply(`you have given <@${target.id}> ${coinsToGive} coins. They now have ${newBalance} coins and you have ${remainingCoins} coins.`)
        }
    },
}