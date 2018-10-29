const Discord = require("discord.js")

// error2507#6116 ID 403269713368711190
module.exports.run = async(bot, message, args) => {
    let test = bot.guilds.map(g=>g.name).join('\n')
    let testEmbed = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .setDescription(test)
    message.channel.send(testEmbed)
}

module.exports.help = {
    name: "serverkurz"
}