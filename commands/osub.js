const request = require('request')
const config = require('./../config.json')
const Discord = require('discord.js')

const apiKey = config.osukey

exports.run = (client, message, args) => {
  if (!args[0] || !args[1]) {
    message.channel.send('Please specify a beatmap and/or difficulty')
  } else {
    let id = args[0].split('/')[4]
    let beatmap = parseInt(args[1]) - 1
    let url = `https://osu.ppy.sh/api/get_beatmaps?k=${apiKey}&s=${id}`

    request(url, (err, res, body) => {
      if (err) throw err
      let info = JSON.parse(body)

      if (info.erorr) {
        console.log(info.error)
        return
      }

      if (info.length === 0) {
        message.channel.send("Can't find beatmap")
        return
      }

      let difficulty = parseFloat(info[beatmap].difficultyrating).toLocaleString('en-US', {maximumFractionDigits: 2, useGrouping: false})
      let passRate = parseFloat(info[beatmap].passcount / info[beatmap].playcount * 100).toLocaleString('en-US', {maximumFractionDigits: 2, useGrouping: false})

      let embed = new Discord.RichEmbed()
            .setTitle('Info about ' + info[beatmap].title + ' | ' + info[beatmap].version)
            .setThumbnail(`https://b.ppy.sh/thumb/${id}l.jpg`)
            .addField('Difficulty', difficulty)
            .addField('Approved on', info[beatmap].approved_date)
            .addField('BPM', info[beatmap].bpm)
            .addField('Pass rate', `${passRate}%`)
            .addField('Max combo:', info[beatmap].max_combo)
      message.channel.send(embed)
    })
  }
}
