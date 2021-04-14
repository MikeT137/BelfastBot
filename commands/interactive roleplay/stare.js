const {prefix} = require('../../config.json')
module.exports = {
    name:'stare',
    description: "It sends a staring gif",
    usage: `${prefix}stare (ping)`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/stare';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1) {
                if(person.id == message.author.id) {
                    message.channel.send('I don\'t blame you for staring at yourself, you\'re so beautiful nya~')
                }else if(person.id === '727093236954431488') {
                    message.channel.send(`${message.author.username}! Where do you think you\'re looking at nya?`)
                }else {
                    message.delete();
                    const embed = new Discord.MessageEmbed()
            
                        .setAuthor(`${message.author.username} stares at ${person.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to stare at them')
            }
        })
    }
}