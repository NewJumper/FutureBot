const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class RolesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'roles',
            group: 'server',
            memberName: 'roles',
            description: 'Server roles.',
            userPermissions: ['ADMINISTRATOR'],
            guildOnly: true
        })
    }

    async run(message) {
        message.channel.bulkDelete(1)
        .catch(console.error);
        
        const role1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**ROLES**')
            .setDescription(`<@&631326468634443778> : The admins of the server with full access to everything.
            \n<@&631325955817996288> : The moderators of the server that watch over it for any rude, suspicious, and/or disrespective activities.
            \n<@&712351772538306680> : Discord bots within this server.
            \n<@&758352051851362336> : The Developer team behind the making of <@743588174244348064>.
            \n<@&760286668879036466> : People who have been here from the start and have helped this server grow as a community.
            \n<@&631325561435848745> : People who have gained the admins' and moderators' trust. They don't have moderation powers, but they have contributed to improving the server to an extent. You have more of a chance to be accepted as a mod if you have this role.
            \n<@&808179340545228842> : The general people, Levels 200+
            \n<@&808178724780113961> : The general people, Levels 150 - 199
            \n<@&808178675547373638> : The general people, Levels 100 - 149
            \n<@&808174874535002112> : The general people, Levels 50 - 99
            \n<@&808174628244684801> : The general people, Levels 25 - 49
            \n<@&808173125320572929> : The general people, Levels 10 - 24
            \n<@&808214591573852220> : The general people, Levels 5 - 9
            \n<@&763412201427697725> : The general people, Levels 1 - 4
            \n<@&800130999152410674> : People who are muted because they have not followed the rules.`)
            .setFooter('Read channel from top to bottom')

        message.channel.send(role1Embed)
    }
}