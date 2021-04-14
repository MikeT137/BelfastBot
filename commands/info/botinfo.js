const {prefix} = require('../../config.json')
module.exports = {
    name:'botinfo',
    description: "It sends information about the bot",
    usage: `${prefix}botinfo`,
    category: 'info',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const moment = require('moment');
        const {version} = require('../../package.json');
        
        const embed = new Discord.MessageEmbed()

            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription('**Information about this bot**')
            .addField('General', [
                `\`Name:\` ${bot.user.tag} (${bot.user.id})`,
                `\`Servers: \` ${bot.guilds.cache.size}`,
                `\`Creation Date:\` ${moment(bot.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                `\`Version:\` ${version}.${bot.commands.size}`,
                `\`Developer:\` [Miku](https://discord.bio/p/mikuyoruka)`,
                `\`Profile picture artist:\` [Linkool21](https://www.reddit.com/user/Linkool21/)`
            ])
            .addField('Want to support me?', '➤[Invite me!](https://discord.com/oauth2/authorize?client_id=727093236954431488&scope=bot&permissions=2146958847) ➤[Join my server!](https://discord.gg/M3sNjT8vt9) ➤[Vote me!](https://top.gg/bot/727093236954431488/vote) ➤[Donate!](https://www.buymeacoffee.com/mikuyoruka)')
            .addField('Special Message', '*Hello, Miku here! Thank you for choosing to use this bot, and for being so supportive with me, i know that it takes a while to fix bugs, and it may not be the best bot out there but still, thank you for using my bot, it means everything. Anyway, i hope you\'re enjoying the features i added so far, and in the meantime, stay safe and have a great day :heart:*')
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}