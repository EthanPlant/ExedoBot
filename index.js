const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const config = require('./config.json');


let servers = require('./data/servers.json');

exports.servers = servers;

client.on('guildCreate', (guild) => {
    if(!servers[guild.id]) {
        servers[guild.id] = {
            queue: [],
            info: "Be sure to set this using !setinfo!"
        }
    }
    let json = JSON.stringify(servers);
    fs.writeFile('./data/servers.json', json, 'utf8');
    console.log(servers[guild.id]);
});


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
            if(fs.existsSync(`./commands/${command}.js`)) {
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