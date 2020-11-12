const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const loadCommands = require('./commands/load-commands')
const levels = require('./levels')

const mongo = require('./mongo')

client.once('ready', async () => {
	console.log('ONLINE')
	client.user.setActivity(`around with JS`)

	await mongo().then(mongoose => {
		try {
			console.log('Connected to Mongo')
		} finally {
			mongoose.connection.close()
		}
	})

	loadCommands(client)
	levels(client)
})

client.login(config.token)