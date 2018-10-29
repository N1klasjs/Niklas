const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async(bot, message, args, prefix) => {
    
    if(message.author.id === config.msg) {
    let channelid = args[0]
    args[0] = " "
    let gesendeterText = args.join(" ")
    if(channelid == undefined) return msg.reply(`Bitte schreibe es so: ``${prefix}msg (channelid) (der Text der gesendet werden soll)```)
    if(channelid != undefined){
    bot.channels.get(`${channelid}`).send(`Diese Message kommt vom Server ${message.guild.name} und vom dem User ${message.author.name}: ${gesendeterText}`)}
        
    let msgembed = new Discord.RichEmbed()
    .setTitle("Erfolgreich gesendet")
    .addField("Nachricht gesendet an", channelid)
    .addField("Mit dem Text:", gesendeterText)
    message.channel.send(msgembed)
    }
}

module.exports.help = {
    name: "messagetochannel"
}