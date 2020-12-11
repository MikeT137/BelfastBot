const {prefix} = require ('../../config.json')

module.exports = bot => {
    const DBL = require("dblapi.js");
    const topgglink = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNzA5MzIzNjk1NDQzMTQ4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAxMDIxNzQ2fQ.QCfXPZhovBGFszhJAtrdBTChuh92-xrtGRoGiCJnYnU';
    const dbl = new DBL(`${topgglink}`, bot);
    
    dbl.on('posted', () => {
    console.log('Server count posted!');
    })
    
    dbl.on('error', e => {
    console.log(`Oops! ${e}`);
    });

    console.log('Neko Belfast is online!');
    setInterval(function(){
        bot.user.setActivity(`${bot.guilds.cache.size} servers | use ${prefix}help for commands`, {type: 'WATCHING'}).catch(console.error);
    }, 10000)

    
    /*Holidays
    January 1st - `Happy New Year nya~!`
    February 14th - `Will you be my Valentine nya~?`
    March 17th - `Happy St. Patrick's Day nya~!`
    April 8th - `Happy Easter nya~!`
    May 11th - `Happy Mother's Day nya~!
    June 18th - `Happy Father's Day nya~!`
    June 29th - `It's my birthday nya~!`
    September 16th - `Happy birthday Miku-senpai!`
    October 31st - `Have a spooky Halloween! Tee hee`
    November 25th - `Happy Thanksgiving nya~!`
    December 25th - `Merry Christmas nya!`
    Every other day - `${bot.guilds.cache.size} servers`*/
}