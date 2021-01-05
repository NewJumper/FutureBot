module.exports = {
    commands: ['delete', 'del'],
    expectedArgs: 'x`*',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    description: 'Deletes up to 99 recent messages in the channel where the command is used.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const amount = parseInt(arguments[0]) + 1;
            
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to delete the messages in this channel!');
        })
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}