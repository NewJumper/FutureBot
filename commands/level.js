const levels = require('../levels')

module.exports = {
    commands: ['level', 'rank'],
    expectedArgs: '',
    description: 'Check the level',
    callback: (message, arguments, text) => {
        message.channel.send(`${message.author} is at Level ${levels.level} and has [xp]XP. Needs ${levels.getNeededXP} more XP`)
    },
    permissions: [],
    requiredRoles: [],
}