const fetch = require("node-fetch")

module.exports = {
    name: 'insult',
    description: 'Sends a insult back!',
    execute(msg, args) {
        fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(res => res.json())
        .then(json => msg.channel.send(json.insult));
    }
}