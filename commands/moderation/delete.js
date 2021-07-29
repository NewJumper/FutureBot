const Commando = require('discord.js-commando')

module.exports = class DeleteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'delete',
            aliases: ['del'],
            group: 'moderation',
            memberName: 'delete',
            description: 'Deletes up to 99 recent messages within the channel.',
            argsType: 'multiple',
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            guildOnly: true
        })
    }

    async run(message, args) {
        const amount = parseInt(args[0]) + 1

        if (isNaN(amount)) {
            message.reply('input a valid number.')
        } else if (amount <= 1 || amount > 100) {
            message.reply('input a number between 1 and 99.')
        }
        
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err)
            message.channel.send('There was an **ERROR** trying to delete messages in this channel!')
        })
    }
}