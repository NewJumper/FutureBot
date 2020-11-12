module.exports = {
    commands: ['random', 'rng'],
    expectedArgs: '<num1>',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 1,
    maxArgs: 1,
    description: 'A random number generator. Generates a random number between 1 and the number provided.',
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]

        message.channel.send(Math.floor(Math.random() * num1 + 1))
    },
    permissions: [],
    requiredRoles: [],
}