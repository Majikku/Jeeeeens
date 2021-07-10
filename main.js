const { Client, Collection } = require('discord.js')
const config = require("./config.json")
const fs = require('fs')
// Change config-format.json file name to "config.json", or just chnage the file path.

const client = new Client()

client.on('ready', () => {
    console.log("IM ALIVE!")
})

client.on('message', (msg) => {

    //#region Checks
    if(msg.author.bot || !msg.content.startsWith(config.prefix)){
        return
    }
    //#endregion

    //#region Command and Argument Seperator

	let args = msg.content.slice(config.prefix.length).trim().split(/ +/);
	let cmd = args.shift();


    console.log("Content: " + msg.content)
    console.log("Command: " + cmd)
    console.log("Arguments: " + args)
    console.log("-------")
    //#endregion
    
    //#region Command handler

    // Imma break this down so I can remember what it does later
    // First search through the "./commands" folder, 
    // then save any javascript file to the commands collection
    client.commands = new Collection()

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

    for(const file of commandFiles){
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    }

    // Handle command
    if (!client.commands.has(cmd)) { return }

	try {
		client.commands.get(cmd).execute(msg, args);
	} catch (error) {
		console.error(error);
	}

    //#endregion
})

client.login(config.token)