module.exports = {
    name:'hug',
    description: "Hugs a user",
    execute(message, argument){
        const Discord = require('discord.js');
        const random_hug = [
            'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
            'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
            'https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif',
            'https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif',
            'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
            'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
            'https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif',
            'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
            'https://acegif.com/wp-content/uploads/anime-hug.gif',
            'https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif',
        ]
        function getUserFromMention(mention) {
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
                return client.users.cache.get(mention);
            }
        }
        const user = getUserFromMention(args[0]);

        if(!argument[2] && message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            const embed = new Discord.MessageEmbed()

            .addField(`${message.author.username} hugs ${.user.username}`, 'so adorable')
            .setImage(random_hug[Math.floor(Math.random() * random_hug.length)])
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}