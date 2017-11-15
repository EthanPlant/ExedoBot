const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on("ready", () => {
    client.user.setStatus('online');
    client.user.setPresence({
        game: {
            name: 'test game name',
        }
    });

    console.log("bot started");
});

client.on("message", (message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    if(message.content.startsWith(config.prefix + "ping")) {
        message.channel.send("Pong!");
    } else if(message.content.startsWith(config.prefix + "info")) {
        message.channel.send("ExedoBot is an open-source, general purpose Discord bot.");
    } else {
        message.channel.send("Command not recognized");
    }
});

client.login(config.token);