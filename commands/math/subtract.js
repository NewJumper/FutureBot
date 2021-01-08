const Commando = require('discord.js-commando')

module.exports = class SubtractCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'subtract',
            aliases: ['sub'],
            group: 'math',
            memberName: 'subtract',
            description: 'Subtracts numbers.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const num = parseInt(args[0])
        let diff = parseInt(args[0])

        for (const arg of args) {
            diff -= parseInt(arg)
        }

        message.channel.send(`${diff + num}`)
    }
}