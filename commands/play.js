const Discord = require("discord.js")
let servers = {}
const YTDL = require("ytdl-core")

function play(connection, message) {
        let server = servers[message.guild.id]

        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}))

        server.queue.shift()

        server.dispatcher.on("end", function() {
            if(server.queue[0]) play(connection, message)
        else connection.disconnect()
        })
    
    }

module.exports.run = async (bot, message, args) => {
    
    
    
    if(!args[0]) {
        message.channel.send("Please enter a link.")
        return
    }

    if(!message.member.voiceChannel) {
        message.channel.sendMessage("Join a Voice-Channel.")
        return
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }

    let server = servers[message.guild.id]

    server.queue.push(args[0])

    if(!message.guild.voiceConnection) message.member.voiceChannel.join()
    .then(function(connection) {
        play(connection, message)
    })
}

module.exports.help = {
    name: "play"
}