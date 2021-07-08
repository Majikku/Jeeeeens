const { Client } = require('discord.js');
const client = new Client();
const token = require("./token.json")
//Change token-format.json file name to "token.json", or just chnage the file path.

client.on('ready', () => {
    console.log("IM ALIVE!");
});

client.login(token)