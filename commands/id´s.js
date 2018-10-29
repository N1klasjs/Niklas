const Discord = require("discord.js")


module.exports.run = async(bot, message, args) => {

    message.delete().catch(O_o=>{});
let idsEmbed = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .addField("Guild Owner ID", message.guild.ownerID)
    .addField("Guild ID", message.guild.id)
    .addField("Channel ID", message.channel.id)
    
    message.channel.send(idsEmbed)

}

module.exports.help = {
    name: "id´s"
}