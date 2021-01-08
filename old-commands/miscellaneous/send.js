module.exports = {
    commands: ['send', 'say'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    description: 'That one secret command.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        let args = arguments.slice(0).join(" ")
        if (!args) args = "_ _"

        message.channel.send(args)
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}