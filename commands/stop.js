exports.run = (client, message, args) => {
  if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect()
}
