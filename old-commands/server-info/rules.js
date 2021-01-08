const Discord = require('discord.js');

module.exports = {
    commands: ['rules'],
    expectedArgs: '`*',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides the rules of the server.',
    callback: (message, arguments, text) => {
        message.channel.bulkDelete(1)
            .catch(console.error);

        // message.channel.send(`\`\`\`ini\n                    [ FutureX Corporate ]\`\`\``);

        const rule1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**FutureX Corporate**')
            .setDescription(`Welcome to the FutureX Corporate Discord server! This server is a kind and respectful community and we welcome everyone in. We are just like any generic Discord server: we have channels for general chatting, gaming, coding, and a bunch of other random stuff. The following messages explain the rules and the roles of this server. The rules apply to everyone, every content posted here, and voice channels. As a final note, please be sure to keep everything appropriate and be courteous to others! Have fun!`);
    
        message.channel.send(rule1Embed);
        message.channel.send('`                                                                     `\n\n`                                                                     `');
        // message.channel.send(`\`\`\`ini\n                      [ SERVER RULES ]\`\`\``);

        const rule2Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**SERVER RULES**')
            .setDescription(`<:one:760528410106920961> - **Be respectful and kind**. No harrassment, bullying, doxxing, or threats of any sort. Try to keep you name, nickname, and profile picture appropriate as well. It's okay to mess with people, but be carefully of what you say and stop when told to do so.
            \n<:two:760529046902931487> - **No spamming**. This includes images, emojis, and especially curse words.
            \n<:three:760529217581482014> - **No impersonation** of any admins or moderators.
            \n<:four:760532025584648203> - **No mass mentions**. Do not ping a certain role multiple times in a row that includes a bunch of people such as <@&631324009874718736>, <@&755947356104556685>, <@&736636207827779667>, and especially <@&631321825439383553> as it will annoy people.
            \n<:five:760540410720026754> - **No advertising** outside of the <#735035424006733834> text channel or in DMs. False advertising is not allowed anywhere on the server.
            \n<:six:760541245352968283> - **No NSFW or NSFL** content that includes gore, shock, nudity, and/or other disturbing graphics.
            \n<:seven:760541443718381608> - **No hate speech or verbal abuse**. This includes racism, sexism, slurs (such as the n-word), and offensive memes, images, and videos. Swearing is okay, as long as it doesn't go against the rules listed here.
            \n<:eight:760541613503545405> - **Keep things in their appropriate channels**. General chatting goes in <#671856010583080967>, book suggestions go in <#635989880010309632>, voting stuff and debates go in <#634169658727202817>, memes go in <#634872291494199296>, etc. Read channel descriptions if needed.`);

        message.channel.send(rule2Embed);

        const rule3Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setDescription(`<:nine:760546014117101609> - **Do not repost** images, videos, or GIFs as it will annoy some people and cluster up the channel. There are some exceptions, and it primarily depends on the circumstance and what content it is.
            \n<:one:760549643607212042><:zero:760549576045363200> - **Keep usernames alphanumeric** with little to no special characters, symbols, or unicode so admins and moderators can easily ping you and so other members of the server can refer to you easily.
            \n<:one:760549643607212042><:one:760549643607212042> - **Do not avoid moderators**. Always follow the rules and do not avoid mutes, kicks, and bans by using alternate accounts.
            \n<:one:760528410106920961><:two:760529046902931487> - **Do not argue with an admin's or a moderator's decision**. You must abide by the rules and respect their decisions. If in anyway you feel like you're being treated unfairly by an admin or a mod ping <@627933033596583957> and he will look into the matter.
            \n<:one:760528410106920961><:three:760529217581482014> - **Do not appeal for a certain role** in a different server or in this server (with the exception being mod requests via Google Forms). Appealing for a role, unmute, or unban for any server in this server will not be tolerated. This will result in you getting MUTED here.
            \n<:one:760528410106920961><:four:760532025584648203> - **No TikToks allowed**. No links or videos related to TikTok can be posted on any channel within this server.`);
    
        message.channel.send(rule3Embed);
        message.channel.send('`                                                                     `\n\n`                                                                     `');
        // message.channel.send(`\`\`\`ini\n                    [ VOICE CHAT RULES ]\`\`\``);

        const rule4Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**VOICE CHAT RULES**')
            .setDescription(`<:one:760528410106920961> - **Do not enter and leave** a voice channel repeatedly. This annoys some people in the call with the constant noise of someone joining and leaving.
            \n<:two:760529046902931487> - **Do not spam the mute button** as it makes you sound like you keep cutting out. This can cause some confusing between the voice channel members.
            \n<:three:760529217581482014> - **Do not switch between channels repeatedly**.`)
            .setFooter('REVISION 4.1 - As of JANUARY 1, 2021');

        message.channel.send(rule4Embed)
        message.channel.send('`                                                                     `\n\n`                                                                     `');
        // message.channel.send(`\`\`\`ini\n                       [ DISCIPLINE ]\`\`\``);

        const discipline1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**DISCIPLINE**')
            .setDescription(`The rules are the law and are enforced by the staff (admins and moderators) at their discretion. Admins ultimately have the final say in how severe a punishment may be, some may be worse than others. Disciplinary actions range from a warning, mute, kick, ban (with appeal), to a permanent ban. Repeating an offense or continuing to break the rules will lead to harsher penalties.
            \nIf an issue comes up, ping any online moderator (<@&631325955817996288>) and they'll handle the situation. Never ping <@627933033596583957> or <@&631326468634443778> unless it's a big emergency and no moderators are online.
            \nOnce you have read all the messages here and agree that you will follow the rules, type: \`\`\`-accept\`\`\` in <#671856010583080967> to get <@&631324009874718736> and gain access to the rest of the server.`);

        message.channel.send(discipline1Embed)
        message.channel.send('`                                                                     `\n\n`                                                                     `');
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}