const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Du kannst es nicht machen!/You can´t do this!");
    
    let typeEmbed = new Discord.RichEmbed()
    .addField("text", "Create a Textchannel.")
    .addField("voice", "Create a Voicechannel.")
    .addField("category", "Create a Category")
    .setTimestamp()


    let cguild = message.guild
    cguild.createChannel(args[0], "text")

    message.channel.send(`Der Textchannel mit dem Namen ${args[0]} wurde erstellt.`)
}

module.exports.help = {
    name: "createtextchhannel",
    name: "ct"
}