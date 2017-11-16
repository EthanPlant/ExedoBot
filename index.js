const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const config = require('./config.json');

// Attach events
fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split('.')[0];
        
        client.on(eventName, (...args) => {
            eventFunction.run(client, ...args);
        });
    });
});

client.on('message', (message) => {
    if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) !== 0) return;

        // Define args
        const args = message.content.slice(config.prefix.length).split(/ +/g);
        const command = args.shift().toLowerCase();

        try {
            if(fs.exists(`./commands/${command}.js`)) {
                let commandFile = require(`./commands/${command}.js`);
                commandFile.run(client, message, args);
            } else {
                message.channel.send('Command unknown');
            }
        } catch (err) {
            console.error(err);
        }
});

    client.login(config.token);