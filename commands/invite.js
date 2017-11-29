exports.run = (client, message, args) => {
  let channel = message.channel
  channel.createInvite(false, 0, 0, false).then(invite => {
    message.channel.send(invite.toString())
  })
}
