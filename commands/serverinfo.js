const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    

        let sicon = message.guild.iconURL
        let serverembed = new Discord.RichEmbed()
        .setTitle("Serverinfo")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount)
        .addField("Total Channels", message.guild.channels.size)
        .addField("Text Channel", message.guild.textchannels.size)

        return message.channel.send(serverembed)
    
}

module.exports.help = {
    name: "serverinfo"
}