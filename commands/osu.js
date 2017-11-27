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
            let info = JSON.parse(body);
            if(info.error) {
                console.log(info.error);
                return;
            }
            if(info.length === 0) {
                message.channel.send("Unknown user");
                return;
            }
            let accuracy = parseFloat(info[0].accuracy).toLocaleString('en-US', {maximumFractionDigits: 2, useGrouping: false});
            let level = parseFloat(info[0].level).toLocaleString('en-US', {maximumFractionDigits: 2, useGrouping: false});

            let embed = new Discord.RichEmbed()
            .setTitle(`Info for ${info[0].username}`)
            .setURL(`https://osu.ppy.sh/u/${info[0].user_id}`)
            .setThumbnail(`https://a.ppy.sh/${info[0].user_id}`)
            .addField("Playcount", parseInt(info[0].playcount).toLocaleString('en-US'))
            .addField("Ranked Score", parseInt(info[0].ranked_score).toLocaleString('en-US'))
            .addField("Level", level)
            .addField("PP", parseInt(info[0].pp_rank).toLocaleString('en-US'))
            .addField("Accuracy", accuracy);
            message.channel.send(embed);
        });
    }
}