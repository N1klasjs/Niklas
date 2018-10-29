const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let replies = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
    

    let result1 = Math.floor((Math.random() * replies.length))
    let result2 = Math.floor((Math.random() * replies.length))
    let result3 = Math.floor((Math.random() * replies.length))
    let result4 = Math.floor((Math.random() * replies.length))
    let result5 = Math.floor((Math.random() * replies.length))
    let result6 = Math.floor((Math.random() * replies.length))
    let result7 = Math.floor((Math.random() * replies.length))
    let result8 = Math.floor((Math.random() * replies.length))
    let result9 = Math.floor((Math.random() * replies.length))
    let result10 = Math.floor((Math.random() * replies.length))


    

    let replies2= [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10]

    let resultfinal = Math.floor((Math.random() * replies2.length))

    let prozentEmbet = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Prozent", `${replies2[resultfinal]}%`)

    // console.log(`Aussortiert: ${replies2}`)
    
    message.delete().catch(O_o=>{});
    message.channel.send(prozentEmbet)
}

module.exports.help = {
    name: "prozent"
}