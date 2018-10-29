const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("Du kannst dies nicht machen!")
    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    mUser.setVoiceChannel(args[1])

    message.channel.send(mUser + " wurde erfolgreich in den Voicechannel mit der ID " + args[1] + " gemoved")
}

module.exports.help = {
    name: "movevoice"
}

