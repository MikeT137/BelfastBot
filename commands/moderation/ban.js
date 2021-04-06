module.exports = {
    name:'ban',
    description: "It bans someone out of a server. Keep in mind:\n-the bot needs admin\n-you need admin as well\n-you can\'t ban someone that has admin\n-the bot needs to have a role higher than the person you are trying to ban(server settings -> roles)",
    usage: 'b.ban (ping)',
    category: 'moderation',
    run: async (bot, message, args) => {
        const member = message.mentions.users.first();

        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send('You don\'t have permissions to use this command');

        if(member) {
            const user = message.guild.member(member);

            if(user) {
                user.ban().then(() => {
                    message.channel.send(`Successfully banned ${member.tag}\nUser ID: ${member.id}`);
                });
            }else {
                message.channel.send('That member isn\'t in the server')
            }
        }else{
            message.channel.send('Please specify a member');
        }
    }
}