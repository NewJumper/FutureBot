const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const os = require('os')

const { version } = require('discord.js')
const mainpkg = require('../../package.json')

module.exports = class DebugCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'debug',
            group: 'miscellaneous',
            memberName: 'debug',
            description: 'View FutureBot\'s statistics and extra information.',
            throttling: {
                usages: 2,
                duration: 10
            },
            guildOnly: true
        })
    }

    async run(message) {
        message.channel.send('debugging...').then(resultMessage => {
            const debug1Embed = new Discord.MessageEmbed()
                .setColor('#1b70bf')
                .setAuthor('FutureBot Debug and Stats', this.client.user.displayAvatarURL())
                .setDescription(`${mainpkg.description}`)
                .addFields(
                    { name: 'Server Name', value: `${message.guild.name}`, inline: true},
                    { name: 'Channels', value: `${this.client.channels.cache.size}`, inline: true},
                    { name: 'Total Members', value: `${message.guild.memberCount}`, inline: true},
                    { name: 'Bot Ping', value: `\`${resultMessage.createdTimestamp - message.createdTimestamp}\``, inline:true},
                    { name: 'API Ping', value: `\`${this.client.ws.ping}\``, inline: true},
                    { name: 'Prefix', value: `\`${this.client.commandPrefix}\``, inline: true},
                    // system debug
                    { name: 'CPU', value: `\`\`\`${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, inline: false},
                    { name: 'Logical Cores', value: `${os.cpus().length}`, inline: true},
                    { name: 'CPU Architecture', value: `${os.arch()}`, inline: true},
                    { name: 'Memory Usage', value: `${Math.floor((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2))}MB of ${Math.floor((os.totalmem() / 1024 / 1024).toFixed(2))}MB`, inline: true},
                    { name: 'Platform', value: `${os.platform()}`, inline: true},
                    { name: 'TSLR', value: `${Math.abs(process.uptime().toFixed(2) / 60).toFixed(2)} minutes`, inline: true}, //maybe rename to Time since last update
                    // dependencies
                    { name: 'FutureBot Dependencies', value: `8`, inline: true},
                    { name: 'Node Version', value: `\`${process.version}\``, inline: true},
                    { name: 'Discord.js Version', value: `\`v${version}\``, inline: true},
                    { name: 'FutureBot Version', value: `\`v${mainpkg.version}\``, inline: true},
                )
                .setTimestamp();

            resultMessage.delete();
            message.channel.send(debug1Embed)
        })
    }
}