const config = require('./../config.json');

exports.run = (client, message, args) => {
    message.channel.send(config.serverinfo);
}