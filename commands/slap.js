module.exports = {
    name:'slap',
    description: "Slaps a user",
    execute(message, argument){
        const random_slap = [
            'https://media.tenor.com/images/9a2c17416b01df4363c05702a489425b/tenor.gif',
            'https://i.imgur.com/GPQJEx5.gif',
            'https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif',
            'https://media.tenor.com/images/356fec15c3c741170a67fd740f918ecd/tenor.gif',
            'https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif',
            'https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif',
            'https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif',
            'https://i.imgur.com/o2SJYUS.gif',
            'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956',
            'https://i.imgur.com/Li9mx3A.gif',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} slaps ${member}, so violent`);
            message.channel.send(random_slap[Math.floor(Math.random() * random_slap.length)]);
        }
    }
}