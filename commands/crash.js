const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async (bot, message, args) => {
    

    
    message.reply("Netter Versuch!")
}

module.exports.help = {
    name: "crash"
}