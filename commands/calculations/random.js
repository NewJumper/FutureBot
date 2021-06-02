const Commando = require('discord.js-commando')

module.exports = class RandomCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'random',
            aliases: ['rng'],
            group: 'calculation',
            memberName: 'random',
            description: 'Generate a random number between 1 and a specified number.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const number = parseInt(args[0])

        message.channel.send(Math.round(Math.random() * number + 1))
    }
}