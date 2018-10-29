const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete().catch(O_o=>{});
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("Please enter a number between 2 and 99");
  
  message.channel.bulkDelete(args[0]).then(() => {
    let clearEmbed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setDescription(`Cleared ${args[0]} messages.`)
  message.channel.send(clearEmbed).then(msg => msg.delete(3500));
  });
  

}


module.exports.help = {
  name: "clear"
}