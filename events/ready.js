let gameName = require('./../config.json').gamename;
let servers = require('./../index').servers

exports.run = (client) => {
    client.user.setPresence({
        status: 'online',
        game: {
            name: gameName
        }
    });
    console.log('Bot ready!');
    console.log(servers);
}