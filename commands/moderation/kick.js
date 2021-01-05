const Discord = require('discord.js');

module.exports = {
    commands: ['kick'],
    expectedArgs: '@user`*',
    permissionError: '',
    minArgs: 1,
    maxArgs: null,
    description: 'Kicks a specified user.',
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
        }
    },
    permissions: ['KICK_MEMBERS'],
    requiredRoles: [],
}