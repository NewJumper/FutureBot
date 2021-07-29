const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const Levels = require('discord-xp')

module.exports = class ChangeXPCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'change-xp',
            aliases: ['chgxp'],
            group: 'ranking',
            memberName: 'change-xp',
            description: 'Give or take XP away from a specified user.',
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
            message.reply('specify a valid number of XP to give or take.')
            return
        }
        if (amount >= Math.pow(2, 64)) {
            message.reply('that\'s too high of XP!')
            return
        }
        // const user = await Levels.fetch(target.id, message.guild.id)

        if (amount > 1) {
            Levels.appendXp(target.id, message.guild.id, amount)
        } else if (amount < 1) {
            Levels.subtractXp(target.id, message.guild.id, amount)
        } else if (amount = 0) {
            return
        }
    }
}