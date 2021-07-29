const Discord = require('discord.js')
const Commando = require('discord.js-commando')

const economy = require('./economy')

module.exports = class GambleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'gamble',
            group: 'economy',
            memberName: 'gamble',
            description: 'Gamble your coins.',
            argsType: 'multiple',
            throttling: {
                usages: 1,
                duration: 60
            },
            ownerOnly: true
        })
    }

    async run(message, args) {
        const { guild, member } = message

        const input = args[0]
        if (!input) {
            message.reply('specify an amount of at least 1.')
            return
        }
        if (input < 1) {
            message.reply('specify an amount of at least 1.')
            return
        }
        if (isNaN(input)) {
            message.reply('specify an amount of at least 1.')
            return
        }

        // const coinsOwned = await economy.getCoins(guild.id, member.id)
        // if (coinsOwned < input) {
        //     message.reply(`you do not have ${input} coins!`)
        //     return
        // }

        // randomizer
        const key1 = Math.round(Math.random() * input + 1)
        const key2 = Math.round(Math.random() * input * -1 - 1)
        const key3 = Math.round(Math.random() * input + Math.sqrt(input) / input)
        const key4 = Math.round(Math.random() * input * -1 + Math.sqrt(input) / input)

        // output
        let output = Math.round(key1 + key2 + key3 + key4)

        // extOutput (extended output)
        let extOutput = 0
        if (output >= input) {
            extOutput = Math.round(output * 1.71)
        } else if (output > 32) {
            extOutput = Math.round(output / input) + output
        } else if (output > 0) {
            extOutput = Math.round(output * Math.random()) + output
        }

        // prevention of bankruptcy
        if (output < input * -1) {
            output = input * -1
        }

        // finOutput (final output)
        let finOutput = 0
        if (extOutput === 0) {
            finOutput = output
        } else {
            finOutput = extOutput
        }

        // prevention of too much gain
        let result = 0
        let bRes = 0
        if (input < 25 && finOutput > input / 2) {
            result = Math.round(input / 3)
        } else {
            result = finOutput
        }
        bRes = result

        // gain or loss
        let colorSet = 'RED'
        let gambleResult = 'gambleResult' // 'Gamble Lost'
        let gambleEnd = 'gambleEnd' // 'You lost'
        if (bRes > 0) {
            result === bRes - input
            colorSet = 'GREEN'
            gambleResult = 'gambleResult' // 'Gamble Won!'
            gambleEnd = 'gambleEnd' // 'You won'
        }

        // jackpot
        if (key1 >= 0.98 && input >= 100) {
            result === Math.round(input / 10 * input)
        }

        // add actual money add and removal
        // ALSO make money earning MORE RARE

        const gambleEmbed = new Discord.MessageEmbed()
            .setColor(colorSet)
            .setTitle(gambleResult)
            .setDescription(`${gambleEnd} ${result} coins`) //             .setDescription(`${gambleEnd} ${result} coins <@${message.author.id}>!`)
            .setTimestamp()

        message.channel.send(gambleEmbed)
        
        // message.channel.send(`\`\`\`js\nINPUT  : ${input}\nKEY 1  : ${key1}\nKEY 2  : ${key2}\nKEY 3  : ${key3}\nKEY 4  : ${key4}\n\nOUTPUT : ${output}\nextOUTPUT : ${extOutput}\n\nfinOUTPUT : ${finOutput}\nRESULT : ${result}\`\`\``)
    }
}