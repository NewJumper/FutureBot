const Discord = require('discord.js')
const package = require('../../package.json')
const config = require('../../config.json')

const loadCommands = require('../load-commands')

module.exports = {
    commands: ['help', 'commands'],
    expectedArgs: '<command>`* or by itself',
    minArgs: 0,
    maxArgs: null,
    description: 'A list of all the commands of FutureBot and more.',
    callback: (message, arguments, text, client) => {
        if(!arguments[0]) {
            const help1Embed = new Discord.MessageEmbed()
                .setColor('#1b70bf')
                .setAuthor('FutureBot Help Center', client.user.displayAvatarURL())
                .setDescription(`**ADMINS** - <@&631326468634443778>
                Economy:
                \`\`\`change-balance\`\`\`
                Server Info:
                \`\`\`futurebot-updates | roles | rules | server-updates\`\`\`
                **MODERATORS** - <@&631325955817996288>
                Moderation:
                \`\`\`ban | delete | kick | mute | tempmute | unmute\`\`\`
                **ALL MEMBERS** - <@&631324009874718736>
                Economy:
                \`\`\`balance | pay\`\`\`
                Math:
                \`\`\`add | cube-root | divide | multiply | pi | power | random | square-root | subtract\`\`\`
                Server:
                \`\`\`help\`\`\`
                Miscellaneous:
                \`\`\`bug | debug | ping\`\`\``)
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Creator', value: `\`${package.author}\``, inline: true},
                    { name: 'Version', value: `\`${package.version}\``, inline: true},
                    { name: 'Prefix', value: `\`${config.prefix}\``, inline: true},
                )
                .setFooter('Use [-help <command>] for more info of a specific command.')

            message.channel.send(help1Embed);
        }

        const commands = loadCommands()
        for (const command of commands) {
            const mainCommand =
                typeof command.commands === 'string'
                    ? command.commands
                    : command.commands[0]

            if (arguments[0] === mainCommand) {
                const help2Embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`${config.prefix}${mainCommand}`)
                    .setDescription(`**Description**: ${command.description || 'No \`description\`'}
                    **Proper Usage**: *\`${config.prefix}${mainCommand} ${command.expectedArgs || '*No \`expectedArgs\`*'}`)

                message.channel.send(help2Embed);
            }
        }
    },
    permissions: [],
    requiredRoles: [],
}