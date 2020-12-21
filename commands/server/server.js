module.exports = {
    commands: ['server', 'server-info', 'server-stats'],
    expectedArgs: 'by itself',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'View server stats and info.',
    callback: (message, arguments, text) => {
        message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
    },
    permissions: [],
    requiredRoles: [],
}