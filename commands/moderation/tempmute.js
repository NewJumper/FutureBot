const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    commands: ['tempmute', 'temp'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 1,
    maxArgs: null,
    description: 'Tempmutes a specified user.',
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        message.channel.bulkDelete(1)
            .catch(console.error);
        
        var member1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(arguments[0]));
        if(!member) return console.log(`${member.username} specify member`)

        let role = message.guild.roles.cache.find(role => role.name === "▥ In Prison");

        if (!role) return message.reply("couldn't find the `muted` role.")

        let time = arguments[1];
        if (!time) {
            return console.log(`${member.username} specify time`);
        }

        let reason = arguments.slice(2).join(" ")
        if (!reason) reason = "unknown"

        member1.roles.add(role.id);

        {
        const tempmute1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`🔇 MUTED`)
            .setDescription(`**${member1.user} has now been muted for ${ms(ms(time))}**\n\n**Reason:** ${reason}`)
            .setTimestamp();
        message.channel.send(tempmute1Embed);
        }

        setTimeout( function () {
            member1.roles.remove(role.id);
            {
            const tempmute2Embed = new Discord.MessageEmbed ()
                .setColor('GREEN')
                .setTitle(`🔉 UNMUTED`)
                .setDescription(`**${member1.user} has been unmuted**\n\n**Reason:** ${reason}`)
                .setTimestamp();
                
            message.channel.send(tempmute2Embed);
            }
        }, ms(time));
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}