const {prefix} = require('../../config.json')
var schedule = require('node-schedule');

module.exports = bot => {
    console.log('Neko Belfast is online!');
    bot.user.setActivity(`with my tail nya~ | ${prefix}help`, {type: 'PLAYING'}).catch(console.error);

    const startTime = new Date('1 0 * * *');
    const endTime = new Date('59 23 * * *');

    const newyear = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 1 1 *'}, function() {
        bot.user.setActivity(`Happy New Year nya~! | ${prefix}help`, {type: 'PLAYING'}).then(newyear.cancel()).catch(console.error);
    })
    const valentine = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 14 2 *'}, function() {
        bot.user.setActivity(`Will you be my Valentine? | ${prefix}help`, {type: 'PLAYING'}).then(valentine.cancel()).catch(console.error);
    })
    const easter = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 8 4 *'}, function() {
        bot.user.setActivity(`Happy Easter nya~! | ${prefix}help`, {type: 'PLAYING'}).then(easter.cancel()).catch(console.error);
    })
    const bel = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 29 6 *'}, function() {
        bot.user.setActivity(`It\'s my birthday nya~! | ${prefix}help`, {type: 'PLAYING'}).then(bel.cancel()).catch(console.error);
    })
    const miku = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 16 9 *'}, function() {
        bot.user.setActivity(`Happy birthday Miku-senpai! | ${prefix}help`, {type: 'PLAYING'}).then(miku.cancel()).catch(console.error);
    })
    const halloween = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 31 10 *'}, function() {
        bot.user.setActivity(`Have a spooky Halloween teehee | ${prefix}help`, {type: 'PLAYING'}).then(halloween.cancel()).catch(console.error);
    })
    const thanks = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 25 11 *'}, function() {
        bot.user.setActivity(`Happy Thanksgiving nya~! | ${prefix}help`, {type: 'PLAYING'}).then(thanks.cancel()).catch(console.error);
    })
    const xmas = schedule.scheduleJob({start: startTime, end: endTime, rule: '* * 25 12 *'}, function() {
        bot.user.setActivity(`Merry Xmas nya~! | ${prefix}help`, {type: 'PLAYING'}).then(xmas.cancel()).catch(console.error);
    })

    /*
    Holidays

    January 1st - Happy New Year nya~!
    February 14th - Will you be my Valentine nya~?
    March 17th - Happy St. Patrick\'s Day nya~!
    April 8th - Happy Easter nya~!
    June 29th - It\'s my birthday nya~!
    September 16th - Happy birthday Miku-senpai!
    October 31st - Have a spooky Halloween! Tee hee
    November 25th - Happy Thanksgiving nya~!
    December 25th - Merry Christmas nya!

    Every other day - with my tail nya~
    */
}