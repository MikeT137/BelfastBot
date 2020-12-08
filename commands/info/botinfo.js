module.exports = {
    name:'botinfo',
    description: "Shows the bot's information",
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        var version = '1.5';
        const birthday = 'june 29th 2020';
        const creator = 'Miku Yoruka#6107';
        
        if (!args[0]){
            const embed = new Discord.MessageEmbed()
            .setTitle('Information')
            .addField('Bot Description', 'Im Belfast:heart:, your lovely neko maid that will be happy to serve you in any way you want, but have patience with me since i learn new things very slowly nya~')
            .addField('Version', version)
            .addField('Birthday', birthday)
            .addField('Creator', creator + ':flag_td:')
            .setColor(0x4AEFBA)
            message.channel.send(embed);
        }
    }
}