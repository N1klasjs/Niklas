const Discord = require("discord.js")



module.exports.run = async(bot, message, args) => {


    let guild = message.member.guild
    let emb = new  Discord.RichEmbed()

if (guild.emojis.array().length)
            emb.addField('Emojis', message.guild.emojis.map(e=>e.toString()).join(" "))
            // emb.addField('Emojis', guild.emojis.map(e => `<:${e.name}:${e.id}>`).join(' '))

message.channel.send('', emb)
}

module.exports.help = {
    name: "emojis"
}