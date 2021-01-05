module.exports = {
    commands: ['cube-root', 'cube', 'cbrt'],
    expectedArgs: 'x`*',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    description: 'Calculate cube roots.',
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]

        message.channel.send(Math.abs(Math.cbrt(num1)))
    },
    permissions: [],
    requiredRoles: [],
}