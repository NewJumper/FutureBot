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
            .setTitle('**Server Update 2.6.1**')
            .setDescription(`= updated server rules and roles
            \n+ added <#831283256410112040>
            \n- removed @*emoji-requests*`)
            .setFooter('April 3, 2021')   //UPDATE THE DATE!!!!

        message.channel.send(update1Embed)
    }
}