const Discord = require('discord.js')
const client = new Discord.Client()
const mongoose = require('mongoose')

const config = require('./config.json')
const mongo = require('./mongo')
const loadCommands = require('./commands/load-commands')
//const levels = require('./levels')

//mongoose.connect('mongodb+srv://NewJumper:56XG7Yq3ZWNQMhdf@futurebot.xpqey.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true })

client.once('ready', async () => {
	console.log('ONLINE')
	client.user.setActivity(`MOOT saying HMMMMM...`, { type: 'LISTENING' })

	await mongo().then((mongoose) => {
		try {
			console.log('Connected to MONGO')
		} finally {
			mongoose.connection.close()
		}
	})

	loadCommands(client)
})

client.login(config.token)