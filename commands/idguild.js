const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    message.delete().catch(O_o=>{});

    
    message.channel.send(`Die ID des Servers ${message.guild} ist ${message.guild.id}`)

}

module.exports.help = {
    name: "idguild"
}