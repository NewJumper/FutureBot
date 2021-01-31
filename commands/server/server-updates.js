const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class ServerUpdatesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'server-updates',
            group: 'server',
            memberName: 'server-updates',
            description: 'Server updates.',
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['ADMINISTRATOR']
        })
    }

    async run(message) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**Server Update 2.5.2**')
            .setDescription(`= synced all channels to parent permissions
            \n+ added a new and updated mute role: <@&800130999152410674>
            + added parent permissions to all Categories`)
            .setFooter('JANUARY 27, 2021')   //UPDATE THE DATE!!!!

        message.channel.send(update1Embed)
    }
}