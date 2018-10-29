const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let replies = ["first", "second", "three"]

    let result = Math.floor((Math.random() * replies.length))

    if(replies[result] === "first") {
    let aicon = message.author.displayAvatarURL
    let firstEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setThumbnail(aicon)
    .setColor("#66FF00")
    .setTitle("Fahrprüfung")
    .setDescription("Du hast BESTANDEN")
    .setTimestamp()

    return message.channel.send(firstEmbed)
    }

    if(replies[result] === "three") {
        let secondEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF0000")
        .setTitle("Fahrprüfung")
        .setDescription("Du hast NICHT BESTANDEN")
        .setTimestamp()

    return message.channel.send(secondEmbed)
    }

}


module.exports.help = {
    name: "fahrprüfung"
}