const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')

const mainpkg = require('../../package.json')

module.exports = class HelpCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'server',
            memberName: 'help',
            description: 'A list of all the commands of FutureBot.'
        })
    }

    async run(message) {
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
                name: 'main',
                content: new MessageEmbed()
                    .setColor('#1b70bf')
                    .setAuthor('FutureBot Help Center', this.client.user.displayAvatarURL())
                    .setDescription(`**View all of FutureBot commands by navigating the Help Center using the reactions**:
                    \n⬅️ - Move to the previous page
                    🔢 - Move to a specific page
                    ➡️ - Move to the next page
                    🛑 - Stops any receiving input (automatically timeouts in 3 mins)
                    \n\n**Most commonly used commands**:
                    \n***\`-balance\`***
                    View your's or a specified user's coin balance.
                    \n***\`-random\`***
                    Generate a random number between 1 and the specified number.
                    \n***\`-debug\`***
                    View FutureBot's statistics and extra information.`)
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Creator', value: `\`${mainpkg.author}\``, inline: true },
                        { name: 'Version', value: `\`v${mainpkg.version}\``, inline: true },
                        { name: 'Prefix', value: `\`${this.client.commandPrefix}\``, inline: true }
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
                    .setColor('#3fa1f6')
                    .setTitle('Administrator Commands')
                    .setDescription(`<@&631326468634443778>
                    \n***\`-change-balance\`***
                    Give or take coins away from a specified user.
                    \n***\`-futurebot-updates\`***
                    FutureBot updates and patch notes.
                    \n***\`-roles\`***
                    Server roles.
                    \n***\`-rules\`***
                    Server rules.
                    \n***\`-server-updates\`***
                    Server updates.`)
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
                    .setColor('#7a89ec')
                    .setTitle('Moderator Commands')
                    .setDescription(`<@&631325955817996288>
                    \n***\`-ban\`***
                    Bans a specified user.
                    \n***\`-delete\`***
                    Deletes up to 99 recent messages within the channel.
                    \n***\`-kick\`***
                    Kicks a specified user.
                    \n***\`-muted\`***
                    View a user's mute information.
                    \n***\`-tempmute\`***
                    Temporarily mutes a specified user.
                    \n***\`-unmute\`***
                    Unmutes a specified user.`)
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
                    .setColor('#d3e2f1')
                    .setTitle('Economy Commands')
                    .setDescription(`<@&631324009874718736> and up
                    \n***\`-balance\`***
                    View your's or a specified user's coin balance.
                    \n***\`-economy-leaderboard\`***
                    **upcoming**
                    \n***\`-pay\`***
                    Pay a user a certain amount of coins.
                    \n***\`-payday\`***
                    **upcoming**
                    \n***\`-salary\`***
                    **upcoming**`) // -payday, earn money based off of salary ~~~ -salary, view how much money you make with a certain time (claim money using -payday)
                    .setFooter('Page 4', this.client.user.displayAvatarURL()),
                reactions: {
                    '⬅️': 'previous',
                    '1️⃣': 'main',
                    '2️⃣': 'page2',
                    '3️⃣': 'page3',
                    '5️⃣': 'page5',
                    '6️⃣': 'page6',
                    '7️⃣': 'page7',
                    '➡️': 'next',
                    '🛑': 'stop'
                }
            },
            {
                name: 'page5',
                content: new MessageEmbed()
                    .setColor('#2588fc')
                    .setTitle('Math Commands')
                    .setDescription(`***\`-add\`***
                    Adds numbers together.
                    \n***\`-cube-root\`***
                    Calculate cube roots.
                    \n***\`-divide\`***
                    Divides numbers.
                    \n***\`-math\`***
                    Basic math calculations in one command: (\`+\`, \`-\`, \`*\`, \`/\`, and \`^\`).
                    \n***\`-multiply\`***
                    Multiplies numbers.`)
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
                    .setColor('#b1ffb5')
                    .setTitle('Math Commands cont.')
                    .setDescription(`***\`-pi\`***
                    Value of Pi or Pi multiplied by a specified number.
                    \n***\`-power\`***
                    Calculate basic exponents.
                    \n***\`-random\`***
                    Generate a random number between 1 and a specified number.
                    \n***\`-square-root\`***
                    Calculate square roots.
                    \n***\`-subtract\`***
                    Subtracts numbers.`)
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
                    \n***\`-help\`***
                    This very command...
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
        ], 180000) // 3 mins

        helpMenu.start()
    }
}