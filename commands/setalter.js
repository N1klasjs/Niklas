const Discord = require("discord.js")
const fs = require("fs")


module.exports.run = async(bot, message, args) => {
    
    
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

    if(!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      }
    }

    let prefix = prefixes[message.guild.id].prefixes


    if(!args[0]) return message.reply(`Benutz es so \`${prefix}setalter day month year\``)
    if(args[3]) return message.reply("Benutz bitte nur dein Geburtsdatum und nicht noch irgendetwas dahinter.")
    let alter = JSON.parse(fs.readFileSync("./alter.json", "utf8"));

    alter[message.member.id] = {
        alter: args.join(" ")
    };

    fs.writeFile("./alter.json", JSON.stringify(alter), (err) => {
        if(err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Geburtstag gesetzt!")
    .setDescription(`Gesetzt auf ${args.join(".")}`)

    message.channel.send(sEmbed)
}

module.exports.help = {
    name: "setalter"
}