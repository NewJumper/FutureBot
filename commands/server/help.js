const Discord = require('discord.js')
const client = new Discord.Client()
const package = require('../../package.json')
const config = require('../../config.json')

module.exports = {
    commands: ['help', 'commands'],
    expectedArgs: '',
    minArgs: 0,
    maxArgs: null,
    description: 'A list of all the commands of FutureBot and more.',
    callback: (message, arguments, text) => {
        let helpArray = message.content.split(" ");
        let helpArgs = helpArray.slice(1);
    
        if(!helpArgs[0]) {
            const help1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureBot**')
            .setDescription(`${package.description}`);
    
            // message.channel.send(help1Embed);

            const help2Embed = new Discord.MessageEmbed()
                .setColor('#1b70bf')
                .setTitle('All Available Commands:')
                .setDescription(`**ADMINS** - <@&631326468634443778>
                Economy:
                \`\`\`add-balance\`\`\`
                Server:
                \`\`\`futurebot-updates | roles | rules | server-updates\`\`\`
                **MODERATORS** - <@&631325955817996288>
                Moderation:
                \`\`\`ban | delete | kick | mute | tempmute | unmute\`\`\`
                **ALL MEMBERS** - <@&631324009874718736>
                Economy:
                \`\`\`balance | pay\`\`\`
                Math:
                \`\`\`add | divide | multiply | random | subtract\`\`\`
                Server:
                \`\`\`bug | help | server\`\`\``)
                .addFields(
                    { name: 'Prefix', value: `\`${config.prefix}\``, inline: true},
                    { name: 'Version', value: `\`${package.version}\``, inline: true},
                    { name: 'Creator', value: `\`${package.author}\``},
                )
                .setFooter('Use [-help <command>] for more info of a specific command.')

            message.channel.send(help2Embed);
        }
    
        // if(helpArgs[0]) {
        //     let command = helpArgs[0];

        //     if(client.commands.has(command)) {
                
        //         command = client.commands.get(command);
        //         const help3Embed = new Discord.MessageEmbed()
        //             .setColor('#1b70bf')
        //             .setTitle(`${command.commands}`)
        //             .setDescription(`
        //             - **Description** ${command.description || "No \`description\`"}
        //             - **Expected Syntax** ${command.expectedArgs || "No \`expectedArgs\`"}
        //             - **Minimum Arguments** ${command.minArgs || "No \`minArgs\`"}
        //             - **Maximum Arguments** ${command.maxArgs || "No \`maxArgs\`"}`)
    
        //         message.channel.send(help3Embed);
        //     }
        // }
    },
    permissions: [],
    requiredRoles: [],
}