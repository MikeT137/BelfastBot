module.exports = {
    name:'mooni',
    description: "A secret command only for mooni",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        
        if (!args[0]){
            const embed = new Discord.MessageEmbed()

            .setTitle('Thank you for accepting such a kid like me in your "life" and for everything youve done so far.You changed my life for the better and ill be loyal to you no matter what, And for that...i cant be grateful enough, i wuv you')
            .setImage('https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif')
            .setColor(0x4AEFBA)
            .setFooter('Sincerely, Miku')
            message.channel.send(embed);
        }
    }
}