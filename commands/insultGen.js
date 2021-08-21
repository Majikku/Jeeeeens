const fetch = require("node-fetch")

module.exports = {
    name: 'insult',
    description: 'Sends a insult back!',
    execute(msg, args) {
        var url = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
        fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(json => msg.channel.send(json.insult));
    }
}