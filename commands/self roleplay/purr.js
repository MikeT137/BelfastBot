module.exports = {
    name:'purr',
    description: "The user purrs",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_purr = [
            'https://media.tenor.com/images/5347a0ac944a8656648d7c31335f3b68/tenor.gif',
            'https://thumbs.gfycat.com/CarefreeIdolizedAmethystgemclam-small.gif',
            'https://i.pinimg.com/originals/9c/93/24/9c93248d94cfc9fb4a6895f6f08c7b61.gif',
            'https://media1.tenor.com/images/3a0ab083612c7f7bd8caa9162cd7b1a1/tenor.gif?itemid=11115579',
            'https://media.giphy.com/media/YW3obh7zZ4Rj2/giphy.gif',
            'https://data.whicdn.com/images/302452164/original.gif',
            'https://i.pinimg.com/originals/f5/91/1b/f5911b6b69ca9a114372a5cf890807a6.gif',
            'https://i.pinimg.com/originals/f5/91/1b/f5911b6b69ca9a114372a5cf890807a6.gif',
            'https://lh3.googleusercontent.com/proxy/mfHzeM6p3uB_XXIq8d0Jv4pUZTWAhsBRuAd5Gq6zt1Vn8ObhrHg8PgQBBRcmXxxUB61rnhwIOGf6rir20s77WHB7qVLnlIdFw8U4U8QoVhaOkl2XoqwmDGLa6Rp8z2uBveZDidZGgAc',
            'https://i.kym-cdn.com/photos/images/original/001/004/286/096.gif',
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is purring, nyaa~`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_purr[Math.floor(Math.random() * random_purr.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}