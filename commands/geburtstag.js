const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

module.exports.run = async(bot, message, args) => {
    if(message.author.id === config.botownerid) {
    let alter = JSON.parse(fs.readFileSync("./alter.json", "utf8"))

    if(!alter[message.member.id]) {
        alter[message.member.id] = {
            alter: `Bitte gebe lege dein Geburtsdatum mit <[prefix]setalter> fest.`
      }
    }


    let geb = alter[message.member.id].alter
    let a = "18"
    let b = "10" * 30
    let c = "2002" * 365
    let gebend = a + b + c

    function btf(inp) {
        if (inp < 10)
        return "0" + inp;
        return inp;
    }
    let date = new Date()
        let y = date.getFullYear()
        let m = btf(date.getMonth() + 1)
        let d = btf(date.getDate())
    
    // let a = d 
    // let b = m * 30
    // let c = 
    let aktuell = d + m * 30 + y * 365

    let answer = aktuell - gebend
    let answerend = answer / 365
    let answerendEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author} ist ${answerend} Jahre alt.`)
    console.log(answerend)
    message.channel.send(answerendEmbed)
    }
}

module.exports.help = {
    name: "geb"
}