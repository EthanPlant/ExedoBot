const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send('Please specify a command.').catch(console.error)
  } else {
    let embed = new Discord.RichEmbed()
    switch (args[0]) {
      case 'admin':
        embed.setTitle('Admin Help')
        embed.addField('!setinfo <info>', 'Sets the info for the server')
        message.channel.send(embed)
        break
      case 'fun':
        embed.setTitle('Fun Help')
        embed.addField('!8ball <question>', 'Answers the question.')
        embed.addField('!coin', 'Flips a coin.')
        embed.addField('!copypasta [number]', 'Replies a random copypasta, unless specified.')
        embed.addField('!decide <option> <option>', 'Chooses between two options.')
        embed.addField('!lenny [number]', 'Returns a random lenny face unless specified.')
        embed.addField('!roll', 'Rolls a dice.')
        message.channel.send(embed)
        break
      case 'info':
        embed.setTitle('Info Help')
        embed.addField('!avatar [@user]', 'Returns avatar of a given user, uses sender if none given.')
        embed.addField('!channelinfo [channel]', 'Returns info on current channel, unless specified.')
        embed.addField('!info', 'Gives info about the bot.')
        embed.addField('!ping', 'Pong! Checks if the bot is working.')
        embed.addField('!serverinfo', 'Gives info about the server.')
        embed.addField('!uptime', 'Shows the current uptime of the bot.')
        embed.addField('!userinfo [@user]', 'Gives information about a given user')
        embed.addField('!version', 'Gives the current version of the bot')
        message.channel.send(embed)
        break
      case 'music':
        embed.setTitle('Music Help')
        embed.addField('!play <link>', 'Plays a song from a given YouTube link.')
        embed.addField('!skip', 'Skips the current song.')
        embed.addField('!stop', 'Stop playing music')
        message.channel.send(embed)
        break
      case 'osu':
        embed.setTitle('Osu help')
        embed.addField('!osu <name>', 'Gives data on a given osu player.')
        embed.addField('!osub <link> <version>', 'Gives data on a given osu beatmap.')
        message.channel.send(embed)
        break
      case 'useful':
        embed.setTitle('Useful Help')
        embed.addField('!invite', 'Produces an invite link')
        message.channel.send(embed)
        break
      default:
        message.channel.send("Can't provide help with that.")
        break
    }
  }
}
