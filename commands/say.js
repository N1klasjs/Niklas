const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      // Say als Embed
      let sayEmbed = new Discord.RichEmbed()
      .setColor('#15f153')
      .setDescription(sayMessage)
      message.delete().catch();
      message.channel.send(sayEmbed);
      // Ende Embed

      // Ohne Embed
      // message.delete().catch();
      // message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}