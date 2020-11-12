module.exports = {
    commands: ['server', 'server-info', 'server-stats'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides server stats and info.',
    callback: (message, arguments, text) => {
        message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
    },
    permissions: [],
    requiredRoles: [],
}