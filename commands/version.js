const version = require('./../package.json').version

exports.run = (client, message, args) => {
  message.channel.send(`Running version ${version} of ExedoBot`)
}
