// This is also the format file for commands

module.exports = {
    name: 'ping',
    description: 'Sends pong!',
    execute(msg, args) {
        msg.channel.send('🏓Pong!')
        
    }
}