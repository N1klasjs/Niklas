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

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Du kannst dies nicht machen!")
    let nUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let nNick = args.join(" ").slice(22);
    if(!nUser) return message.channel.send(`Benutze es bitte so <${prefix}nick @User nickname>`);

    // Update the member's nickname
    if(nUser != undefined) {
        nUser.setNickname(nNick)
    }
}

module.exports.help = {
    name: "nick"
}