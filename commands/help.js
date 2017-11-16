exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send('Please specify a command.').catch(console.error);
    } else {
        switch(args[0]) {
            case 'ping':
                message.channel.send('Replys pong.').catch(console.error);
                break;
            case 'info':
                message.channel.send('Gives info about the bot.').catch(console.error);
                break;
            case 'help':
                message.channel.send('Gives help about a given command.').catch(console.error);
                break;
            default:
                message.channel.send('Command unknown.').catch(console.error);
                break;
        }
    }
}