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

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // Get command arguements
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'ping':
            message.channel.send('Pong!');
            break;
        case 'info':
            message.channel.send('ExedoBot is an open-source, general purpose Discord bot.');
            break;
        case 'help':
            if(!args[0]) {
                message.channel.send('Please specify a command.');
            } else {
                switch(args[0]) {
                    case 'ping':
                        message.channel.send('Replys pong.');
                        break;
                    case 'info':
                        message.channel.send('Gives info about the bot.');
                        break;
                    case 'help':
                        message.channel.send('Gives help about a given command.');
                        break;
                    default:
                        message.channel.send('Command unknown.');
                        break;
                }
            }
            break;
        default:
            message.channel.send('Command unknown');
            break;
    }
});

client.login(config.token);