const Commando = require('discord.js-commando')
const Discord = require('discord.js');

module.exports = class BugCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            group: 'utility',
            memberName: 'bug',
            description: 'Report any bugs or issues with FutureBot.'
        })
    }

    async run(message) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const bug1Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Report a Bug')
            .setURL('https://forms.gle/75qmDbambLWuM4By9')
        
        message.channel.send(bug1Embed)
    }
}