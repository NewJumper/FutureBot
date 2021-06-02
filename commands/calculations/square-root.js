const Commando = require('discord.js-commando')

module.exports = class SquareRootCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'square-root',
            aliases: ['sqrt'],
            group: 'calculation',
            memberName: 'square-root',
            description: 'Calculate square roots.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const number = parseInt(args[0])

        message.channel.send(Math.abs(Math.sqrt(number)))
    }
}