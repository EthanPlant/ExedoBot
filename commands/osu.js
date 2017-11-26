const request = require('request');
const config = require('./../config.json');
const Discord = require('discord.js');

const apiKey = config.osukey;

exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send("Please specify a user");
    } else {
        let url = `https://osu.ppy.sh/api/get_user?k=${apiKey}&u=${args[0]}&type=String`;

        request(url, (err, res, body) => {
            if(err) throw err;

            let info = JSON.parse(body);
            let embed = new Discord.RichEmbed()
            .setTitle(`Info for ${info[0].username}`)
            .setURL(`https://osu.ppy.sh/u/${info[0].user_id}`)
            .setThumbnail(`https://a.ppy.sh/${info[0].user_id}`)
            .addField("Playcount", info[0].playcount)
            .addField("Ranked Score", info[0].ranked_score)
            .addField("Level", info[0].level)
            .addField("PP", info[0].pp_rank)
            .addField("Accuracy", info[0].accuracy);
            message.channel.send(embed);
        });
    }
}