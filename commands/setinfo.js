const botowner = require('./../config.json').botowner;
const servers = require('./../index').servers;

exports.run = (client, message, args) => {
    let member = message.guild.member(message.author);
    if(message.author.id != botowner || !member.hasPermission("MANAGE_GUILD")) {
        message.channel.send("Don't have permission");
        return;
    }

    if(!args[0]) {
        message.channel.send("Please give info!");
        return;
    }

    let info = args.join(' ');
    let server = servers[message.guild.id];
    server.info = info;
    message.channel.send(`Set info to ${info}`);
}