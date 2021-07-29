const Commando = require('discord.js-commando')

module.exports = class MathCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'math',
            group: 'calculation',
            memberName: 'math',
            description: 'Basic math calculations in one command: (`+`, `-`, `*`, `/`, and `^`).',
            argsType: 'multiple'
        })
    }

    async run(message, args) {
        const number1 = parseInt(args[0])
        const operator = args[1]
        const number2 = parseInt(args[2])

        operator === '+' ? message.say(number1 + number2) : 
        operator === '-' ? message.say(number1 - number2) : 
        operator === '*' ? message.say(number1 * number2) :
        operator === '/' ? message.say(number1 / number2) :
        operator === '^' ? message.say(Math.pow(number1, number2)) : message.say('unknown operation, include spaces')
    }
}