const {prefix} = require('../../config.json')
module.exports = {
    name:'smile',
    description: "It sends a smiling gif",
    usage: `${prefix}smile`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const random_smile = [
            'https://c.tenor.com/3fAZZncIHDQAAAAM/smile-anime.gif',
            'https://c.tenor.com/VrUxJZFdmIsAAAAM/anime-excited.gif',
            'https://c.tenor.com/P80RbbzxQU0AAAAM/izuku-midoriya-smile.gif',
            'https://c.tenor.com/BA2eLg42RbEAAAAM/isitwrongtotryandpickupgirlsinadungeon-bellcranel.gif',
            'https://c.tenor.com/nuKmYDgaDpAAAAAM/anime-smile.gif',
            'https://tenor.com/view/yoruka-smile-yoruka-smile-anime-anime-girl-gif-20389447',
            'https://tenor.com/view/headpat-smile-blush-anime-gif-13946208',
            'https://c.tenor.com/U1p83COiAPYAAAAM/anime-happy-anime-smile.gif',
            'https://c.tenor.com/ivEOWR55wBEAAAAM/anime-happy.gif',
            'https://c.tenor.com/5pFqYK5spNkAAAAM/anime-girl.gif'
        ]
        message.delete();
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} is smiling, how beautiful`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${args.join(' ')}`)
            .setImage(random_smile[Math.floor(Math.random() * random_smile.length)])
            .setColor('#7d77df')
        message.channel.send(embed);
    }
}