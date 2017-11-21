const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send('Please specify a command.').catch(console.error);
    } else {
        switch(args[0]) {
            case 'info':
                let embed = new Discord.RichEmbed()
                .setTitle("Info Help")
                .addField("!avatar [@user]", "Returns avatar of a given user, uses sender if none given.")
                .addField("!channelinfo [channel]", "Returns info on current channel, unless specified.")
                .addField("!info", "Gives info about the bot.")
                .addField("!ping", "Pong! Checks if the bot is working.")
                .addField("!serverinfo", "Gives info about the server.")
                .addField("!uptime", "Shows the current uptime of the bot.")
                .addField("!userinfo [@user]", "Gives information about a given user")
                .addField("!version", "Gives the current version of the bot");
                message.channel.send(embed);
                break;
            default:
                message.channel.send("Can't provide help with that.")
        }
    }
}