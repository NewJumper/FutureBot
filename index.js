const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const loadCommands = require('./commands/load-commands')
const mongo = require('./mongo')
const levels = require('./levels')

client.once('ready', async () => {
	console.log('[+] Online')
	client.user.setActivity(`in v0.15.1.1`)

	await mongo()

	levels(client)
	loadCommands(client)
})

client.login(config.token)