const {prefix} = require('../../config.json')
module.exports = {
    name:'apologise',
    description: "It sends a apologising gif",
    usage: `${prefix}apologise @ping`,
    category: 'interactive roleplay',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const {api_key} = require ('../../config.json')
        const person = message.mentions.users.first();
        const fetch = require('node-fetch');
        const url = 'https://api.otakugifs.xyz/gif/sorry';

        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': api_key,
            },
        }).then((res) =>
            res.json()
        ).then((json) => {
            if(message.mentions.members.size >= 1) {
                if(person.id === '727093236954431488') {
                    message.channel.send(`Im not sure why you\'re apologising, but it\'s okay, i forgive you.`)
                }else if (person.id != message.author.id) {
                    message.delete();
                    const embed = new Discord.MessageEmbed()
                
                        .setAuthor(`${message.author.username} is apologising to ${person.username}, sorry T-T`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`${args.slice(1, args.length).join(' ')}`)
                        .setImage(json.url)
                        .setFooter('Powered by otakugifs.xyz', 'https://cdn.discordapp.com/emojis/832616362794942475.png?v=1')
                        .setColor('#7d77df')
                    message.channel.send(embed);
                }
            }else {
                message.channel.send('You have to ping someone to apologise to')
            }
        })
    }
}