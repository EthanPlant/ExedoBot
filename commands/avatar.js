const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(message.mentions.users.size === 0) {
        if(!message.author.avatarURL) {
            message.channel.send("User has no avatar!");
        } else {
            let embed = new Discord.RichEmbed()
            .setTitle(message.author.username +"'s avatar")
            .setImage(message.author.avatarURL);
            message.channel.send(embed)
        }
    } else {
        let user = message.mentions.users.first();
        if(!user.avatarURL) {
            message.channel.send("User has no avatar!");
        } else {
            let embed = new Discord.RichEmbed()
            .setTitle(user.username + "'s avatar")
            .setImage(user.avatarURL);
            message.channel.send(embed);
        }
    }
}