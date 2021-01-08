module.exports = {
    commands: ['random', 'rng'],
    expectedArgs: 'x`*',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    description: 'Generates a random number between 1 and the number provided.',
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]

        message.channel.send(Math.floor(Math.random() * num1 + 1))
    },
    permissions: [],
    requiredRoles: [],
}