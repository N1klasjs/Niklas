const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    
    message.delete().catch(O_o=>{});


    message.channel.send(`Die ID des Channels ${message.channel} ist ${message.channel.id}`)
    
}

module.exports.help = {
    name: "idchannel"
}