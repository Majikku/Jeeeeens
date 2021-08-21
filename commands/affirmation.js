const fetch = require("node-fetch")

module.exports = {
    name: 'affirmation',
    description: 'Sends affirmations!',
    execute(msg, args) {
        var url = 'https://www.affirmations.dev/';
        fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(json => msg.channel.send(json.affirmation));
    }
}