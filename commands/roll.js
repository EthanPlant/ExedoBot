exports.run = (client, message, args) => {
    let roll = Math.floor(Math.random() * 6) + 1;
    message.channel.send(`"You rolled ${roll}`);
}