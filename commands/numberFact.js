const fetch = require("node-fetch");
const { Headers } = require('node-fetch');

module.exports = {
    name: 'number-fact',
    description: 'Sends a number fact!',
    execute(msg, args) {
        var url = 'http://numbersapi.com/random/math';

        fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(json => msg.channel.send(json.text))
    }
}