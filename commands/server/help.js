const loadCommands = require('../load-commands')
const { prefix } = require('../../config.json')

module.exports = {
    commands: ['help', 'commands'],
    description: 'A list of all the commands of FutureBot.',
    callback: (message, arguments, text) => {
        let reply = 'FutureBot commands:\n\n'

        const commands = loadCommands()

        for (const command of commands) {
            //checks permissions
            let permissions = command.permission

            if (permissions) {
                let hasPermission = true
                if (typeof permissions === 'string') {
                    permissions = [permission]
                }

                for (const permission of permissions) {
                    if (!message.member.hasPermission(permission)) {
                        hasPermission = false
                        break
                    }
                }

                if (!hasPermission) {
                    continue
                }
            }

            const mainCommand = typeof command.commands === 'string' ? command.commands : command.commands[0]
            const args = command.expectedArgs ? ` ${command.expectedArgs}` : ''
            const { description } = command

            reply += `**${prefix}${mainCommand}${args}** = ${description}\n`
        }

        message.channel.send(reply)
    },
}