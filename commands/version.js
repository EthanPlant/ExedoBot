const version = require('./../index.js').version

exports.run = (client, message, args) => {
    message.channel.send("Running version " + version + " of ExedoBot");
}