module.exports = {
    name:'storyrun',
    description: "The user playes the story called run",
    execute(message, argument){
        const Discord = require('discord.js');

        if(!argument[1]) {
            message.channel.send(`${message.author.username}, look in your DM for the story! (dont give spoilers)`)
            message.author.send('   Story - RUN\nYoure a 20 year old boy. You live in a small cabin inside a forest. Youre there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\nb!1)still chop wood\n   2)go inside your house\n   3)take your axe with you and investigate the zone\nSelect your choice:');
            
            if(message.content === 'b!1') {
                message.author.send('You think to yourself that it was just an animal or something, so you decide to ignore it. You then finish chopping the wood, you grab all of it, and go towards your basement so you can leave it there. But then you hear that weird sound again, this time coming from your basement. You then:\nb!1)go in the basement\n   2)leave the cabin\nSelect your choice:');

            }
        }
    }
}