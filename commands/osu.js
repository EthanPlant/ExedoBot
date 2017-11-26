const osuAPI = require('osu-api');
const config = require('./../config.json');
const Discord = require('discord.js')

const osu = new osuAPI.Api(config.osukey);

exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send("Please specify a user.");
        return;
    }

    osu.getUser(args[0], (err, info) => {
        if(err) throw err;
        let userId = info.user_id;
        let embed = new Discord.RichEmbed()
        .setTitle("Info for " + info.username)
        .setURL('https://osu.ppy.sh/u/' + userId)
        .setThumbnail('https://a.ppy.sh/' + userId)
        .addField("Playcount", info.playcount)
        .addField("Ranked Score", info.ranked_score)
        .addField("Level", info.level)
        .addField("PP", info.pp_rank)
        .addField("Accuracy", info.accuracy);
        message.channel.send(embed);
    });
}