const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send('Please specify a command.').catch(console.error);
    } else {
        switch(args[0]) {
            case 'fun':
                let embed = new Discord.RichEmbed()
                .setTitle("Fun Help")
                .addField("!8ball <question>", "Answers the question.")
                .addField("!coin", "Flips a coin.")
                .addField("!copypasta [number]", "Replies a random copypasta, unless specified.")
                .addField("!decide <option> <option>", "Chooses between two options.")
                .addField("!lenny [number]", "Returns a random lenny face unless specified.")
                .addField("!roll", "Rolls a dice.");
                message.channel.send(embed);
                break;
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
            case 'music':
                let embed = new Discord.RichEmbed()
                .setTitle("Music Help")
                .addField("!play <link>", "Plays a song from a given YouTube link.")
                .addField("!skip", "Skips the current song.")
                .addField("!stop", "Stop playing music");
                message.channel.send(embed);
                break;
            case 'osu':
                let embed = new Discord.RichEmbed()
                .setTitle("Osu help")
                .addField("!osu <name>", "Gives data on a given osu player.")
                .addField("!osub <link> <version>", "Gives data on a given osu beatmap.");
                message.channel.send(embed);
                break;
            default:
                message.channel.send("Can't provide help with that.")
                break;
        }
    }
}