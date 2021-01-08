// const Discord = require('discord.js')
// const client = new Discord.Client()
const Commando = require('discord.js-commando')

const path = require('path')
const loadCommands = require('./old-commands/load-commands')
const config = require('./config.json')
const mongo = require('./mongo')

const client = new Commando.CommandoClient({
	owner: '627933033596583957',
	commandPrefix: config.prefix
})

client.once('ready', async () => {
	console.log('[+] Online')
	client.user.setActivity(`in the Commando Framework`)

	await mongo().then(console.log('[+] Mongo Link'))

	client.registry
	.registerGroups([
		['economy', 'economy commands'],
		['math', 'math commands'],
		['miscellaneous', 'miscellaneous commands'],
		['moderation', 'moderation commands'],
		['server-info', 'server information commands'],
	])
	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, 'commands'))

	// loadCommands(client)
})

client.login(config.token)