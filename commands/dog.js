const Discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    let { body } = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#000011")
    .setTitle("HUND :dog:")
    .setImage(body.url)
    .setFooter("Powered by https://random.dog/woof.json")
    message.channel.send(dogembed)

}

module.exports.help = {
    name: "dog"
}