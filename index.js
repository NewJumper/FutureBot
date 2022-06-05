const { Client, Collection } = require('discord.js')
const { config } = require('dotenv')
const { readdirSync } = require('fs')

config()

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

client.commands = new Collection()
client.aliases = new Collection()
client.categories = readdirSync("./commands");

require(`./handler`)(client);

client.on('ready', () => {
    console.log("bot is ready")
})

client.on('messageCreate', async message => {
    if(message.author.bot || !message.content.startsWith(process.env.PREFIX) || !message.guild) return
    if(!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args)
})

client.login(process.env.TOKEN)