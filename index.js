import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const PREFIX = process.env.PREFIX

const client = new DiscordJS.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

client.on('ready', () => {
    console.log("bot is ready")
})

client.on('messageCreate', (message) => {
    let text = message.content
    
    if(text == PREFIX + "add 2 + 2") message.channel.send('9')
    if(text == PREFIX + 'test') message.reply("no way")
})

client.login(process.env.TOKEN)