exports.run = (client, message, args) => {
    if(!args[0] || !args[1]) {
        message.channel.send("Need two options");
    } else {
        let choice = Math.floor(Math.random() * 2) + 1;
        if(choice === 1) message.channel.send(args[0]);
        else message.channel.send(args[1]);
    }
}