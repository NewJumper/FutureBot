module.exports = {
    commands: ['pi'],
    expectedArgs: 'x`* or by itself',
    permissionError: '',
    minArgs: 0,
    maxArgs: 1,
    description: 'The number of Pi or Pi multiplied by the specified number.',
    callback: (message, arguments, text) => {
        let num1 = +arguments[0]

        if (num1 >= 0) {
            message.channel.send(Math.PI * num1)
        } else if (num1 <= -1) {
            message.channel.send(Math.PI * num1)
        } else {
            message.channel.send(Math.PI)
        }
    },
    permissions: [],
    requiredRoles: [],
}