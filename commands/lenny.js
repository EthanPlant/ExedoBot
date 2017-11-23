const lennys = require('./../data/lenny.js').lennys;

exports.run = (client, message, args) => {
    if(!args[0]) {
        let lenny = lennys[Math.floor(Math.random() * lennys.length)];
        message.channel.send(lenny);
    } else {
        if(lennys[args[0]]) {
            let lenny = lennys[args[0]];
            message.channel.send(lenny);
        } else {
            message.channel.send("Lenny doesn't exist.");
        }
    }
}