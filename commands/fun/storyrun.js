const Discord = require('discord.js');
module.exports = {
    name: 'storyrun',
    description: 'The story about running'

    run: async(bot, message, args) => {
        const msg1 = 'Youre a 20 year old boy. You live in a small cabin inside a forest. Youre there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\n👍 - still chop wood\n✊ - go inside your house\n👎 - take your axe with you and investigate the zone';
        const embed = new Discord.MessageEmbed()

        .setTitle('Story - RUN')
        .addField(msg1, '\n\n**Select your choice**')
        .setColor(0x4AEFBA)
        message.channel.send(embed);
    }
}