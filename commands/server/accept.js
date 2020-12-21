module.exports = {
    commands: ['accept'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        message.channel.bulkDelete(1)
            .catch(console.error);

        if (member.hasPermission('READ_MESSAGE_HISTORY')) {
            return
        } else {
            message.member.roles.add('631324009874718736')
        }
    },
    permissions: [],
    requiredRoles: [],
}