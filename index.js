const Commando = require('discord.js-commando')

require('dotenv').config()
const path = require('path')
const mongo = require('./mongo')

const client = new Commando.CommandoClient({
	owner: '627933033596583957',
	commandPrefix: '-'
})

client.once('ready', async () => {
	console.log('[+] Online')
	client.user.setActivity(`in version 1.1.1`)

	await mongo().then(console.log('[+] Mongo Link'))

	client.registry
	.registerDefaultTypes()
	.registerGroups([
		['calculation', 'Calculation Commands'],
		['economy', 'Economy Commands'],
		['miscellaneous', 'Miscellaneous Commands'],
		['moderation', 'Moderation Commands'],
		['server', 'Server Commands']
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
		help: false,
		ping: false,
		eval: false,
		unknownCommand: false
	})
	.registerCommandsIn(path.join(__dirname, 'commands'))
})

client.login(process.env.TOKEN)