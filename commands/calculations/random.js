const Commando = require('discord.js-commando')

module.exports = class RandomCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'random',
            aliases: ['rng'],
            group: 'calculation',
            memberName: 'random',
            description: 'Generate a random number between 1 and x or x through y.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const x = parseInt(args[0])
        const y = parseInt(args[1])

        if (!y) {
            message.channel.send(Math.floor(Math.random() * x + 1))
            return
        }
        
        if (x > y) {
            message.reply(`make sure to have the larger number second: \`-random ${y} ${x}\``)
            return
        } else {
            message.channel.send(Math.floor(Math.random() * (y - x + 1)) + x)
        }
    }
}