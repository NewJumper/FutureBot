module.exports = {
    commands: ['reload', 'end'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        if (message.author.id === '627933033596583957') {
            message.channel.bulkDelete(1)
                .catch(console.error);

            message.channel.send(`Reloading...`)
                .then(process.exit());
        }
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}