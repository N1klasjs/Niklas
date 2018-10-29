const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    
    let replies = [":one:", ":two:", ":three:", ":four:", ":five:", ":six:"]

    let result = Math.floor((Math.random() * replies.length))
    let rollEmbed = new Discord.RichEmbed()
    .setColor("#000011")
    .setAuthor(message.author.tag)
    .setTitle(`Hat ${replies[result]} gewürfelt.`)
    .setTimestamp(new Date())

    message.channel.send(rollEmbed)

}


module.exports.help = {
    name: "roll"
}