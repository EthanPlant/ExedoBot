exports.run = (client) => {
    client.user.setPresence({
        status: 'online',
        game: {
            name: 'test game name'
        }
    });
    console.log('Bot ready!');
}