const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const Levels = require('discord-xp')

module.exports = class ChangeLevelCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'change-level',
            aliases: ['chglvl'],
            group: 'ranking',
            memberName: 'change-level',
            description: 'Give or take levels away from a specified user.',
            argsType: 'multiple',
            userPermissions: ['ADMINISTRATOR']
        })
    }

    async run(message, args) {
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('specify a user.')
            return
        }

        const amount = args[1]
        if (isNaN(amount)) {
            message.reply('specify a valid number of levels to give or take.')
            return
        }
        if (amount >= 100) {
            message.reply('that\'s too high! (the max is 100 levels per command)')
            return
        }
        // const user = await Levels.fetch(target.id, message.guild.id)

        if (amount > 1) {
            Levels.appendLevel(target.id, message.guild.id, amount)
        } else if (amount < 1) {
            Levels.subtractLevel(target.id, message.guild.id, amount)
        } else if (amount = 0) {
            return
        }
    }
}