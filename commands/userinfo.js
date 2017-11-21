const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(message.mentions.users.size === 0) {
        let user = message.author;
        let embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setTitle("Info about " + user.username)
        .addField("Name", user.username + "#" + user.discriminator)
        .addField("ID", user.id)
        .addField("Created On", user.createdAt);
        message.channel.send(embed);
    } else {
        let user = message.mentions.users.first();
        let embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setTitle("Info about " + user.username)
        .addField("Name", user.username + "#" + user.discriminator)
        .addField("ID", user.id)
        .addField("Created On", user.createdAt);
        message.channel.send(embed);
    }
}