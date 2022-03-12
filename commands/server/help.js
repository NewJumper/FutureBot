const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')

const mainpkg = require('../../package.json')

module.exports = class Help2Command extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'help2',
            group: 'server',
            memberName: 'help2',
            description: 'A list of all the commands of FutureBot.',
            throttling: {
                usages: 1,
                duration: 20
            }
        })
    }

    async run(message) {
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
                name: 'main',
                content: new MessageEmbed()
                    .setColor('#1b70bf')
                    .setAuthor('FutureBot Help Menu', this.client.user.displayAvatarURL())
                    .setDescription(`**View all FutureBot commands by navigating the Help Menu using the reactions**:
                    \n⬅️ - Move to the previous page
                    🔢 - Move to a specific page
                    ➡️ - Move to the next page
                    🛑 - Stops any receiving input (automatically timeouts in 2 minutes)
                    \n**Table of Contents**:
                    \n2️⃣ - Calculation Commands
                    \n3️⃣ - Economy Commands
                    \n4️⃣ - Moderation Commands
                    \n5️⃣ - Levels & XP Commands
                    \n6️⃣ - Server Commands
                    \n7️⃣ - Utility Commands`)
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Prefix', value: `\`${this.client.commandPrefix}\``, inline: true },
                        { name: 'Version', value: `\`v${mainpkg.version}\``, inline: true },
                        { name: 'Labels', value: `\`A\` - admin only; \`M\` - moderator and up`, inline: true }
                    )
                    .setFooter('Page 1'),
                reactions: {
                    '2️⃣': 'page2',
                    '3️⃣': 'page3',
                    '4️⃣': 'page4',
                    '5️⃣': 'page5',
                    '6️⃣': 'page6',
                    '7️⃣': 'page7',
                    '➡️': 'next',
                    '🛑': 'stop'
                }
            },
            {
                name: 'page2',
                content: new MessageEmbed()
                    .setColor('#d43a2f')
                    .setTitle('Calculation Commands')
                    .setDescription(`***\`-cube-root\`***
                    Calculate cube roots.
                    \n***\`-math\`***
                    Basic math calculations in one command: (\`+\`, \`-\`, \`*\`, \`/\`, and \`^\`).
                    \n***\`-pi\`***
                    Value of Pi or Pi multiplied by a specified number.
                    \n***\`-random\`***
                    Generate a random number between 1 and *x* or *x* through *y*.
                    \n***\`-square-root\`***
                    Calculate square roots.`)
                    .setFooter('Page 2', this.client.user.displayAvatarURL()),
                reactions: {
                    '⬅️': 'previous',
                    '1️⃣': 'main',
                    '3️⃣': 'page3',
                    '4️⃣': 'page4',
                    '5️⃣': 'page5',
                    '6️⃣': 'page6',
                    '7️⃣': 'page7',
                    '➡️': 'next',
                    '🛑': 'stop'
                }
            },
            {
                name: 'page3',
                content: new MessageEmbed()
                    .setColor('#ebbe2d')
                    .setTitle('Economy Commands')
                    .setDescription(`***\`-balance\`***
                    View your's or a specified user's bits.
                    \n***\`-change-balance\`*** \`A\`
                    Give or take bits away from a specified user.
                    \n***\`-pay\`***
                    Pay a user a certain amount of bits.*`)
                    .setFooter('Page 3', this.client.user.displayAvatarURL()),
                reactions: {
                    '⬅️': 'previous',
                    '1️⃣': 'main',
                    '2️⃣': 'page2',
                    '4️⃣': 'page4',
                    '5️⃣': 'page5',
                    '6️⃣': 'page6',
                    '7️⃣': 'page7',
                    '➡️': 'next',
                    '🛑': 'stop'
                }
            },
            {
                name: 'page4',
                content: new MessageEmbed()
                    .setColor('#0084ff')
                    .setTitle('Moderation Commands')
                    .setDescription(`***\`-ban\`*** \`M\`
                    Bans a specified user.
                    \n***\`-delete\`*** \`M\`
                    Deletes up to 99 recent messages within the channel.
                    \n***\`-kick\`*** \`M\`
                    Kicks a specified user.
                    \n***\`-mute\`*** \`M\`
                    Mutes a specific user.
                    \n***\`-tempmute\`*** \`M\`
                    Temporarily mutes a specified user.
                    \n***\`-unmute\`*** \`M\`
                    Unmutes a specified user.`)
                    .setFooter('Page 4', this.client.user.displayAvatarURL()),
                reactions: {
                    '⬅️': 'previous',
                    '1️⃣': 'main',
                    '2️⃣': 'page2',
                    '3️⃣': 'page3',
                    '4️⃣': 'page4',
                    '6️⃣': 'page6',
                    '7️⃣': 'page7',
                    '➡️': 'next',
                    '🛑': 'stop'
                }
            },
            {
                name: 'page5',
                content: new MessageEmbed()
                    .setColor('#64e8b3')
                    .setTitle('Levels & XP Commands')
                    .setDescription(`***\`-change-level\`*** \`A\`
                    Give or take levels away from a specified user.
                    \n***\`-change-xp\`*** \`A\`
                    Give or take XP away from a specified user.
                    \n***\`-rank\`***
                    View your\'s or another user\'s level and xp..
                    \n***\`-xp-leaderboard\`*** \`A\`
                    *alpha stage*.`)
                    .setFooter('Page 5', this.client.user.displayAvatarURL()),
                reactions: {
                    '⬅️': 'previous',
                    '1️⃣': 'main',
                    '2️⃣': 'page2',
                    '3️⃣': 'page3',
                    '4️⃣': 'page4',
                    '6️⃣': 'page6',
                    '7️⃣': 'page7',
                    '➡️': 'next',
                    '🛑': 'stop'
                }
            },
            {
                name: 'page6',
                content: new MessageEmbed()
                    .setColor('#50a242')
                    .setTitle('Server Commands')
                    .setDescription(`***\`-futurebot-updates\`*** \`A\`
                    FutureBot updates and patch notes.
                    \n***\`-help\`***
                    This very command...
                    \n***\`-roles\`*** \`A\`
                    Server roles.
                    \n***\`-rules\`*** \`A\`
                    Server rules.
                    \n***\`-server-updates\`*** \`A\`
                    Server updates.`)
                    .setFooter('Page 6', this.client.user.displayAvatarURL()),
                reactions: {
                    '⬅️': 'previous',
                    '1️⃣': 'main',
                    '2️⃣': 'page2',
                    '3️⃣': 'page3',
                    '4️⃣': 'page4',
                    '5️⃣': 'page5',
                    '7️⃣': 'page7',
                    '➡️': 'next',
                    '🛑': 'stop'
                }
            },
            {
                name: 'page7',
                content: new MessageEmbed()
                    .setColor('#50a242')
                    .setTitle('Utility Commands')
                    .setDescription(`***\`-bug\`***
                    Report any bugs or issues with FutureBot.
                    \n***\`-debug\`***
                    View FutureBot's statistics and extra information.
                    \n***\`-ping\`***
                    View the bot's and API's ping.`)
                    .setFooter('Page 7', this.client.user.displayAvatarURL()),
                reactions: {
                    '⬅️': 'previous',
                    '1️⃣': 'main',
                    '2️⃣': 'page2',
                    '3️⃣': 'page3',
                    '4️⃣': 'page4',
                    '5️⃣': 'page5',
                    '6️⃣': 'page6',
                    '🛑': 'stop'
                }
            }
        ], 120000) // 2 mins

        helpMenu.start()
    }
}