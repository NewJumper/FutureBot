module.exports = {
    name: "test",
    aliases: ["tet"],
    run: async(client, message, args) => {
        message.channel.send(`username: ${message.author.username}\ntag: ${message.author.discriminator}`)
    }
}