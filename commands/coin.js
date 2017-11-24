exports.run = (client, message, args) => {
    let number = Math.floor(Math.random() * 2) + 1;
    if(number === 1) message.channel.send("Heads");
    else message.channel.send("Tails");
}