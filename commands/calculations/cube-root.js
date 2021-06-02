const Commando = require('discord.js-commando')

module.exports = class CubeRootCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cube-root',
            aliases: ['cbrt'],
            group: 'calculation',
            memberName: 'cube-root',
            description: 'Calculate cube roots.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const number = parseInt(args[0])

        message.channel.send(Math.abs(Math.cbrt(number)))
    }
}