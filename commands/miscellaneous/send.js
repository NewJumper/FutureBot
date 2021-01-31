const Commando = require('discord.js-commando')

module.exports = class SendCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'send',
            aliases: ['say'],
            group: 'miscellaneous',
            memberName: 'send',
            description: 'You know what it does.',
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['ADMINISTRATOR'],
            hidden: true
        })
    }

    async run(message, args) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        message.channel.send(args)
    }
}