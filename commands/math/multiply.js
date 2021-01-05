module.exports = {
    commands: ['multiply', 'multiplication', 'multi'],
    expectedArgs: 'x  y`*',
    permissionError: '',
    minArgs: 2,
    maxArgs: 2,
    description: 'Multiplies two numbers.',
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.channel.send(`${num1 * num2}`)
    },
    permissions: [],
    requiredRoles: [],
}