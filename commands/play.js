const servers = require('./../index.js').servers;
const YTDL = require('ytdl-core');
const Discord = require('discord.js');

function play(connection, message) {
    let server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
    YTDL.getInfo(server.queue[0], (err, info) => {
        if(err) throw err;
        let lengthS = Math.floor(info.length_seconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        let lengthM = Math.floor(info.length_seconds % (60 * 60) / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        let embed = new Discord.RichEmbed()
        .setTitle("Now Playing: " + info.title)
        .setThumbnail(info.thumbnail_url)
        .setTimestamp()
        .setDescription(info.description.substr(0, 139) + "...")
        .setFooter("Length: " + lengthM + ":" + lengthS);
        message.channel.send(embed);
    });

    server.queue.shift();

    server.dispatcher.on("end", () => {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send("Please provide a link");
        return;
    }

    if(!YTDL.validateURL(args[0])) {
        message.channel.send("Please provide a valid YouTube link.");
        return;
    }

    if(!message.member.voiceChannel) {
        message.channel.send("You must be in a voice channel");
        return;
    }

    let server = servers[message.guild.id];

    server.queue[0] = args[0];

    server.queue.push(args[0]);

    YTDL.getInfo(server.queue[server.queue.length - 1], (err, info) => {
        if(err) throw err;
        message.channel.send("Added " + info.title + " to the queue");
    });

    if(!message.guild.voiceConnection) {
        message.member.voiceChannel.join().then((connection) => {
            play(connection, message);
        });
    }
}