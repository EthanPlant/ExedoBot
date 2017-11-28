exports.run = (client, message, args) => {
  let info = require('./../config.json').serverinfo
  message.channel.send(info)
}
