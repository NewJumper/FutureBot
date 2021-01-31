const Commando = require('discord.js-commando')

module.exports = class MathCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'math',
            group: 'math',
            memberName: 'math',
            description: 'Basic math calculations in one command: (`+`, `-`, `*`, `/`, and `^`).',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const num1 = parseInt(args[0])
        const operator = args[1]
        const num2 = parseInt(args[2])

        operator === '+' ? message.say(num1 + num2) : 
        operator === '-' ? message.say(num1 - num2) : 
        operator === '*' ? message.say(num1 * num2) :
        operator === '/' ? message.say(num1 / num2) :
        operator === '^' ? message.say(Math.pow(num1, num2)) : message.say('unknown operation')
    }
}