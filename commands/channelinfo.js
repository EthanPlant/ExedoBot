exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send(message.channel.topic)
  } else {
    let channelName = args[0]
    if (!message.guild.channels.find('name', channelName)) {
      message.channel.send("Channel doesn't exist.")
    } else {
      let channel = message.guild.channels.find('name', channelName)
      if (!channel.topic) message.channel.send('Channel has no topic')
      else message.channel.send(channel.topic)
    }
  }
}
