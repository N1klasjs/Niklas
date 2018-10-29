const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    // Von BlueGaming#1107  ID 268374237612474389    
    if(message.author.id === "384073151598034944") {
        String.prototype.replaceAll = function (search, replacement) {
        let target = this;
                    return target.replace(new RegExp(search, 'g'), replacement);
                };
        let serverEmbed = new Discord.RichEmbed()
        .addField("Info", "Bot guilds")
        .addField("Server anzahl", `${bot.guilds.size}`)
        .addField("Server namen", bot.guilds.array().toString().replaceAll(",", "\n"))
        .setFooter("nhelp für Hilfe")
        .setColor("#00ffd8")
        message.delete().catch(O_o=>{});
        message.channel.send(serverEmbed);
    }            
}

module.exports.help = {
    name: "server"
}