module.exports = {
    commands: ['power', 'pwr', 'pow', 'exponent', 'exponents', 'expo'],
    expectedArgs: '*`x  y`*',
    permissionError: '',
    minArgs: 2,
    maxArgs: 2,
    description: 'Calculate basic exponents.',
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.channel.send(Math.floor(Math.pow(num1, num2)))
    },
    permissions: [],
    requiredRoles: [],
}