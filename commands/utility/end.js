const Commando = require('discord.js-commando')

module.exports = class EndCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'end',
            group: 'utility',
            memberName: 'end',
            description: 'Ends the bot\'s process.',
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['ADMINISTRATOR'],
            ownerOnly: true,
            hidden: true
        })
    }

    async run() {
        process.exit()
    }
}