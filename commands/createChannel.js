const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Du kannst es nicht machen!/You can´t do this!");
    
    let typeEmbed = new Discord.RichEmbed()
    .addField("text", "Create a Textchannel.")
    .addField("voice", "Create a Voicechannel.")
    .addField("category", "Create a Category")
    .setTimestamp()

    if(args[1] === undefined) return message.channel.send("Du musst `text`, `voice` oder `category` benutzen.", typeEmbed)
    let cguild = message.guild
    cguild.createChannel(args[0], args[1])

    message.reply(`Der Channel mit dem Namen ${args[0]} wurde erstellt.`)
}

module.exports.help = {
    name: "createchannel",
    name: "cc"
}