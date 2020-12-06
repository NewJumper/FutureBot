const Discord = require('discord.js')
const client = new Discord.Client()
const mongoose = require('mongoose')

const config = require('./config.json')
const mongo = require('./mongo')
const loadCommands = require('./commands/load-commands')

client.once('ready', async () => {
	console.log('[+] Online')
	client.user.setActivity(`in v0.13.0`)

	const connectToMongoDB = async () => {
		await mongo().then((mongoose) => {
			try {
				console.log('[+] Connected to MongoDB')
			} finally {
				mongoose.connection.close()
			}
		})
	}
	
	connectToMongoDB()

	loadCommands(client)
})

client.login(config.token)