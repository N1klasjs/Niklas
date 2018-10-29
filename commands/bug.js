const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async(bot, message, args) => {
    
    // let bugs = JSON.parse(fs.readFileSync("./bugs.json", "utf8"));

    // bugs[message.id] = {
    //     bugs: args.join(" ")
    // };

    // fs.writeFile("./bugs.json", JSON.stringify(bugs), (err) => {
    //     if(err) console.log(err)
    // });

    message.delete().catch(O_o=>{});

    let bugEmbed = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .addField("You reported the bug:", args.join(" "))

    message.channel.send(bugEmbed)

    // Sedet an den Bug channel eine Message
    let backfischEmbed = new Discord.RichEmbed()
    .setTitle("**!!!Someone reported a BUG!!!**")
    .setDescription(args.join(" "))
    bot.channels.get("452214698352312341").send(backfischEmbed)
}

module.exports.help = {
    name: "bug"
}