const Commando = require('discord.js-commando')

module.exports = class EndCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'end',
            group: 'miscellaneous',
            memberName: 'end',
            description: 'Ends the bot\'s process.',
            clientPermissions: ['ADMINISTRATOR'],
            ownerOnly: true,
            hidden: true
        })
    }

    async run(message) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        message.channel.send(`Ending...`)
        .then(process.exit())
    }
}