const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async (bot, message, args) => {

    if(message.author.id === config.botownerid){
    let argsEmbed = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .addField("ARGS[0]", `${args[0]}`)
    .addField("ARGS[1]", `${args[1]}`)
    .addField("ARGS[2]", `${args[2]}`)

    message.channel.send(argsEmbed)
    // console.log(message.member.displayColor)
    // console.log(message.author)
    }
}

module.exports.help = {
    name: "args"
}