const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'futurebot-updates',
            aliases: ['bot-updates'],
            group: 'server-info',
            memberName: 'futurebot-updates',
            description: 'FutureBot updates and patch notes.'
        })
    }

    async run(message) {
        message.channel.bulkDelete(1)
        .catch(console.error);

        const update1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureBot Update 0.17.0**')
            .setDescription(`\n= preparing for full functionality of the new command handler
            \n+ new command handler
            \n- deleted 90% off all commands (moving them into the new command handler)
            - removed all leveling functionalities and messages due to a bug`)
            .setFooter('JANUARY 8, 2021');   //UPDATE THE DATE!!!

        message.channel.send(update1Embed);
    }
}