const Discord = require('discord.js');
/*const file = new Discord.MessageAttachment('./images/fxcwall.png');*/

module.exports = {
    commands: ['headquarters', 'main'],
    expectedArgs: '',
    permissionError: 'You don\'t have permission to run this command',
    minArgs: 0,
    maxArgs: 0,
    description: 'Provides information on the rules and roles of the server.',
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        message.channel.bulkDelete(1)
            .catch(console.error);

        const rule1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**RULES**')
            .setDescription(`Welcome to the official FutureX Corporate Discord server!!! The following messages explain the rules and the roles in this server. The rules apply to everyone and all content posted in the server. Make sure to keep everything appropriate and be courteous to others.`);
    
        message.channel.send(rule1Embed);

        const rule2Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
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
            \n<:one:760528410106920961><:four:760532025584648203> - **No TikToks allowed**. No links or videos related to TikTok can be posted on any channel within this server.`)
            .setFooter('REVISION 3.1 - As of NOVEMBER 8, 2020');
    
        message.channel.send(rule3Embed);
        message.channel.send('_ _');

        const discipline1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**DISCIPLINE**')
            .setDescription(`The rules are the law and are enforced by the staff (admins and moderators) at their discretion. Admins ultimately have the final say in how severe a punishment may be, some may be worse than others. Disciplinary actions range from a warning, mute, kick, ban (with appeal), to a permanent ban. Repeating an offense or continuing to break the rules will lead to harsher penalties.
            \nIf an issue comes up, ping any online moderator (<@&631325955817996288>) and they'll handle the situation. Never ping <@627933033596583957> or <@&631326468634443778> unless it's a big emergency and no moderators are online.
            \nOnce you have read all the messages here and accept that you will follow the rules, type: \`\`\`-accept\`\`\` in <#671856010583080967> to get <@&631324009874718736> and gain access to the rest of the server.`);

        message.channel.send(discipline1Embed)
        message.channel.send('_ _');

        const role1Embed = new Discord.MessageEmbed()
            .setColor('#1b70bf')
            .setTitle('**ROLES**')
            .setDescription(`<@&631326468634443778> : The admins of the server with full access to everything.
            \n<@&631325955817996288> : The moderators of the server that watch over it for any rude, suspicious, and/or disrespective activities.
            \n<@&712351772538306680> : Official Discord bots that this server uses.
            \n<@&758352051851362336> : The Developer team behind the making of <@743588174244348064>.
            \n<@&760286668879036466> : People who have been here from the start and have helped this server grow as a community.
            \n<@&631325561435848745> : People who have gained the admins' and moderators' trust. They don't have moderation powers, but they have contributed to improving the server to an extent. You have more of a chance to be accepted as a mod if you have this role.
            \n<@&766064012257263686> : The general people, Levels 150+
            \n<@&766064287880839199> : The general people, Levels 100 - 149
            \n<@&766064174337490974> : The general people, Levels 50 - 99
            \n<@&766062864690970654> : The general people, Levels 25 - 49
            \n<@&766061679103574066> : The general people, Levels 10 - 24
            \n<@&631324009874718736> : The general people, Levels 1 - 9
            \n<@&757609210983874620> : People who have done something wrong and now cannot mention anyone or react to a message.
            \n<@&635282473101819906> : People who are muted because they have not followed the rules.`)
            .setFooter('Read channel from top to bottom');

        message.channel.send(role1Embed);
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}