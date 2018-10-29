const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async (bot, message, args) => {
    
    let bicon = bot.user.displayAvatarURL
        let botembed = new Discord.RichEmbed()
        .setDescription("Botinfo")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Bot ID", `${bot.user.id}`)
        .addField("Bot Owner", `${config.botowner}`)
        .addField("Created On", bot.user.createdAt)   
        .setTimestamp()    

        return message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo"
}