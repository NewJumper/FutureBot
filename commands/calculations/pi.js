const Commando = require('discord.js-commando')

module.exports = class PiCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pi',
            group: 'calculation',
            memberName: 'pi',
            description: 'Value of Pi or Pi multiplied by a specified number.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const number = parseInt(args[0])

        if (!args[0]) {
            message.channel.send(Math.PI)
        } else {
            message.channel.send(Math.PI * number)
        }
    }
}