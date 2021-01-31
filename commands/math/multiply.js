const Commando = require('discord.js-commando')

module.exports = class MultiplyCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'multiply',
            aliases: ['multi'],
            group: 'math',
            memberName: 'multiply',
            description: 'Multiplies numbers.',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        let product = 1

        for (const arg of args) {
            product *= parseInt(arg)
        }

        message.channel.send(product)
    }
}