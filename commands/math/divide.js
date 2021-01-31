const Commando = require('discord.js-commando')

module.exports = class DivideCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'divide',
            aliases: ['div'],
            group: 'math',
            memberName: 'divide',
            description: 'Divides numbers.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const num = parseInt(args[0])
        let quotient = args[0]

        for (const arg of args) {
            quotient /= parseInt(arg)
        }

        message.channel.send(`${quotient * num}`)
    }
}