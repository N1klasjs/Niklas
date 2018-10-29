const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async (bot, message, args) => {
    
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.displayAvatarURL
        },
        title: "Invite",
        description: `Here you can [invite](${config.invite}) me.`,
        timestamp: new Date(),
        footer: {
          //icon_url: bot.user.displayAvatarURL,
          text: `© ${bot.user.tag}`
        }
      }
    });
}

module.exports.help = {
    name: "invite"
}