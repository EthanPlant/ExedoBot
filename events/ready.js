let gameName = require('./../config.json').gamename;

exports.run = (client) => {
    client.user.setPresence({
        status: 'online',
        game: {
            name: gameName
        }
    });
    console.log('Bot ready!');
}