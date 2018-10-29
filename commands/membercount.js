const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        
        let guild = message.guild
        let memberEmbed = new Discord.RichEmbed()
        .setTitle("Membercount")
        .setDescription(`This server has ${guild.members.size} members.`)
        message.channel.send(memberEmbed)
    
}

module.exports.help = {
    name: "membercount"
}