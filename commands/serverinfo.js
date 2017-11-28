const servers = require('./../index').servers;

exports.run = (client, message, args) => {
    let info = servers[message.guild.id].info;
    message.channel.send(info);
}