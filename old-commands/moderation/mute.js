const Discord = require('discord.js');

module.exports = {
    commands: ['mute'],
    expectedArgs: '@user <reason>`*',
    permissionError: '',
    minArgs: 1,
    maxArgs: null,
    description: 'Mutes a specified user.',
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        message.channel.bulkDelete(1)
            .catch(console.error);
        
        var member2 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(arguments[0]));
        if(!member) return console.log(`${member.username} specify member`)

        let role = message.guild.roles.cache.find(role => role.name === "▥ In Prison");

        let reason = arguments.slice(1).join(" ")
        if (!reason) reason = "unknown"

        member2.roles.add(role.id);

        {
        const mute1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`🔇 MUTED`)
            .setDescription(`**${member2.user} has been muted**\n\n**Reason:** ${reason}`)
            .setTimestamp();
        message.channel.send(mute1Embed);
        }
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}