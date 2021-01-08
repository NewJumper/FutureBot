// const Commando = require('discord.js-commando')
// const Discord = require('discord.js')
// const os = require('os')

// const { version } = require('discord.js')
// const config = require('../../config.json')
// const mainpkg = require('../../package.json')

// module.exports = class DebugCommand extends Commando.Command {
//     constructor(client) {
//         super(client, {
//             name: 'debug',
//             group: 'miscellaneous',
//             memberName: 'debug',
//             description: 'A command to view extra information and statistics about the bot.',
//         })
//     }

//     async run(message, client) {
//         message.channel.send('test').then(resultMessage => {
//             const debug1Embed = new Discord.MessageEmbed()
//                 .setColor('#1b70bf')
//                 .setTitle('FutureBot Debug and Stats')
//                 .setDescription(`${mainpkg.description}`)
//                 .addFields(
//                     { name: 'Server Name', value: `${message.guild.name}`, inline: true},
//                     // { name: 'Channels', value: `${client.channels}`, inline: true},
//                     { name: 'Total Members', value: `${message.guild.memberCount}`, inline: true},
//                     { name: 'Bot Ping', value: `\`${resultMessage.createdTimestamp - message.createdTimestamp}\``, inline:true},
//                     // { name: 'API Ping', value: `\`${client.ws.ping}\``, inline: true},
//                     { name: 'Prefix', value: `\`${config.prefix}\``, inline: true},
//                     // system debug
//                     { name: 'CPU', value: `\`\`\`${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, inline: false},
//                     { name: 'Logical Cores', value: `${os.cpus().length}`, inline: true},
//                     { name: 'CPU Architecture', value: `${os.arch()}`, inline: true},
//                     { name: 'Memory Usage', value: `${Math.floor((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2))}MB of ${Math.floor((os.totalmem() / 1024 / 1024).toFixed(2))}MB`, inline: true},
//                     { name: 'Platform', value: `${os.platform()}`, inline: true},
//                     { name: 'Uptime', value: `${Math.round(os.uptime() / 60)} minutes`, inline: true}, //maybe rename to Time since last update
//                     // dependencies
//                     { name: 'FutureBot Dependencies', value: `6`, inline: true},
//                     { name: 'Node Version', value: `\`${process.version}\``, inline: true},
//                     { name: 'Discord.js Version', value: `\`v${version}\``, inline: true},
//                     { name: 'FutureBot Version', value: `\`${mainpkg.version}\``, inline: true},
//                 )
//                 .setTimestamp();

//             resultMessage.delete();
//             message.channel.send(debug1Embed)
//         })
//     }
// }