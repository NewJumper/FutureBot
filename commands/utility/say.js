const Commando = require('discord.js-commando')

module.exports = class SayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'utility',
            memberName: 'say',
            description: 'You know what it does.',
            userPermissions: ['ADMINISTRATOR'],
            hidden: true
        })
    }

    async run(message, args) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        if (!args[0]) {
            return
        }

        message.channel.send(args)
    }
}