const servers = require('./../index').servers;

exports.run = (guild) => {
    if(!servers[guild.id]) {
        servers[guild.id] = {
            queue: []
        }
    }
    console.log(`Joined ${guild.id}`);
}