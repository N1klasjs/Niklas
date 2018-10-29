const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async(bot, message, args) => {
    
    if(message.author.id === config.botownerid){
    process.exit()
    }else{
        message.channel.send("You can do this!!!!!!!!!")
    }
}

module.exports.help = {
    name: "STOPP"
}