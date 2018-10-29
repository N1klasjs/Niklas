let Discord = module.require("discord.js");

const agree = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot do that!");

    if (args.length === 0) 
    return message.channel.send("INVALID FORMAT: Use !poll <Question> ...");

      let pollChannel = message.guild.channels.find(`name`, "voting");

    let pollMessage = args.slice(0).join(" ").split('; ');

    let pollEmbed = new Discord.RichEmbed()
    .setAuthor("Network Poll", bot.user.displayAvatarURL)
    .setColor("#711822")
    .setFooter("Network Bot")
    .setTimestamp()
    .addField("Choices: ", pollMessage);
        
    pollChannel.send(pollEmbed)
    .then(function (message, str) {
    message.react(agree)
    .then(() => message.react(disagree))
    });
}
module.exports.help = {
    name: "poll"
}