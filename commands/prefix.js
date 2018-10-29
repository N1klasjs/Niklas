const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async (bot, message, args, prefix) => {

    if(message.author.id != config.botownerid){
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("!!!NEIN!!!")
    }
    if(!args[0] || args[0 == "help"]) return message.reply(`Benutz: ${prefix}prefix <neues Prefix hier>`)
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Prefix gesetzt!")
    .setDescription(`Gesetzt auf ${args[0]}`)

    message.channel.send(sEmbed)
}

module.exports.help = {
    name: "prefix"
}