const Commando = require('discord.js-commando')

module.exports = class PowerCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'power',
            aliases: ['pow', 'pwr'],
            group: 'math',
            memberName: 'power',
            description: 'Calculate basic exponents.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const num1 = parseInt(args[0])
        const num2 = parseInt(args[1])

        message.channel.send(Math.floor(Math.pow(num1, num2)))
    }
}