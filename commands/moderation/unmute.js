const Discord = require('discord.js');

module.exports = {
    commands: ['unmute'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 1,
    maxArgs: null,
    description: 'Unmutes a specified user.',
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        message.channel.bulkDelete(1)
            .catch(console.error);
        
        var member2 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(arguments[0]));
        if(!member) return console.log(`${member.username} specify member`)

        let role = message.guild.roles.cache.find(role => role.name === "▥ In Prison");

        member2.roles.remove(role.id);

        {
        const unmute1Embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`🔉 UNMUTED`)
            .setDescription(`**${member2.user} has been unmuted**`)
            .setTimestamp();
        message.channel.send(unmute1Embed);
        }
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}