const servers = require('./../index').servers;

exports.run = (client, message, args) => {
    let server = servers[message.guild.id];

    if(server.dispatcher) server.dispatcher.end();
}