const options = require('./../data/eightball').options;

exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send("Please ask a question.");
    } else {
        let choice = options[Math.floor(Math.random() * options.length)];
        message.channel.send(choice);
    }
}