module.exports = {
    name:'neko',
    description: "neko hentai image",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
    	const neko = require('nekos.life');
    	const gif = new neko();

        if (message.channel.nsfw) {
            const embed = new Discord.MessageEmbed()

                .setAuthor(`- Neko`, message.author.displayAvatarURL({ dynamic: true }))
                .setImage(`${gif.nsfw.nekoGif().url}`)
                .setColor('#7d77df')
            message.channel.send(embed);
        } else {
            message.channel.send("NYAA! Master what are you doing? This is not the right place >///<");
        }
    }
}