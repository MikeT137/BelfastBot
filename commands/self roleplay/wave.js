const {prefix} = require('../../config.json')
module.exports = {
    name:'wave',
    description: "It sends a waving gif",
    usage: `${prefix}wave`,
    category: 'self roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/wave';
        message.delete();
        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            const embed = new Discord.MessageEmbed()
            
                .setAuthor(`${message.author.username} is waving their hand, say hi`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${args.join(' ')}`)
                .setImage(json.url)
                .setFooter('Powered by otakugifs.xyz')
                .setColor('#7d77df')
            message.channel.send(embed);
        })
    }
}