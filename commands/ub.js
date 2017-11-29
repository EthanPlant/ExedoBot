const Discord = require('discord.js')
const request = require('request')

exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send('Please specify a term!')
    return
  }

  let term = args.join(' ')
  let url = `http://api.urbandictionary.com/v0/define?term=${term}`
  request(url, (err, res, body) => {
    if (err) throw err

    let definition = JSON.parse(body)
    let embed = new Discord.RichEmbed()
        .setTitle(`Urban Dictionary defination for ${term}`)
        .addField('Definition', `${definition.list[0].definition}`)
        .addField('Example', `${definition.list[0].example}`)
    message.channel.send(embed)
  })
}
