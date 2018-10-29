const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor(0x8BC34A)
        .setTitle("~PING~")
        .setDescription(`Der Bot hat momentan einen Ping von ${bot.pings} ms`)
        .setTimestamp()
        message.channel.send({embed});
                
}

module.exports.help = {
    name: "ping"
}