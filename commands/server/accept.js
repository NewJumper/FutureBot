const Commando = require('discord.js-commando')

module.exports = class AcceptCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'accept',
            group: 'server',
            memberName: 'accept',
            description: 'You accept the rules of the server and agree to them.',
            hidden: true,
            guildOnly: true
        })
    }

    async run(message) {
        const { member } = message

        message.channel.bulkDelete(1)
        .catch(console.error)

        if (member.hasPermission('READ_MESSAGE_HISTORY')) {
            return
        } else {
            message.member.roles.add('631324009874718736')
        }
    }
}