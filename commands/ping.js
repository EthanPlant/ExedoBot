exports.run = (client, message, args) => {
    message.channel.send('Pong!').catch(console.error);
}