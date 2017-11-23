const pasta = require('./../data/copypasta.js').pasta;

exports.run = (client, message, args) => {
    if(!args[0]) {
        let copypasta = pasta[Math.floor(Math.random() * pasta.length)];
        message.channel.send(copypasta);
    } else {
        if(pasta[args[0]]) {
            let copypasta = pasta[args[0]];
            message.channel.send(copypasta);
        } else {
            message.channel.send("Copypasta doesn't exist");
        }
    }
}