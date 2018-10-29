const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Bitte frag eine Frage!")
    let replies = ["Ja", "Nein", "Vielleicht", "Frag später noch mal", "Meine Quellen sagen: JA", "Meine Quellen sagen: NEIN"]

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ")

    let ballEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Frage", question)
    .addField("Antwort", replies[result])
    
    message.channel.send(ballEmbed)

}

module.exports.help = {
    name: "8ball"
}