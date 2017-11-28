exports.run = (client, message, args) => {
    let seconds = Math.floor(process.uptime() % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    let minutes = Math.floor(process.uptime() % (60 * 60) / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    let hours = Math.floor(process.uptime() / (60 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    message.channel.send(`Bot has been up for ${hours}:${minutes}:${seconds}.`);
}