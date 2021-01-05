module.exports = {
    commands: ['square-root', 'square', 'sqrt'],
    expectedArgs: 'x`*',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    description: 'Calculate square roots.',
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]

        message.channel.send(Math.abs(Math.sqrt(num1)))
    },
    permissions: [],
    requiredRoles: [],
}