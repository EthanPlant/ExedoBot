const servers = require('./../index.js').servers;
const YTDL = require('ytdl-core');

function play(connection, message) {
    let server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

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

    if(!message.member.voiceChannel) {
        message.channel.send("You must be in a voice channel");
        return;
    }

    if(!servers[message.guild.id]) {
        servers[message.guild.id] = {
            queue: []
        }
    }

    let server = servers[message.guild.id];

    server.queue[0] = args[0];

    if(!message.guild.voiceConnection) {
        message.member.voiceChannel.join().then((connection) => {
            play(connection, message);
        });
    }
}