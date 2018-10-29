const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(message.channel.id != "444941115540504576") {
        message.channel.send("Dieser Command ist in diesem Channel deaktiviert!")
    }
    if(message.channel.id === "444941115540504576") {
    message.member.addRole(`444924641035812885`)
    .then(console.log)
    .catch(console.log)
    console.log(`${message.member.displayName} mit der ID ${message.author.id}`) 
    
    
    
    let acceptEmbed = new Discord.RichEmbed()
        .setDescription("Accept")
        .setColor("#15f153")
        .addField("Accepted User", `${message.author} with the ID ${message.author.id} accepted the rules!`)
        .addField("In Channel", message.channel)
        .addField("Accepted Ad", message.createdAt)
    
        let acceptchannel = message.guild.channels.find(`name`, "accepts");
        if(!acceptchannel) return message.channel.send("Couldn't find accepts channel.");
        
        
        message.delete().catch(O_o=>{})
        acceptchannel.send(acceptEmbed)
            
    }
}

module.exports.help = {
    name: "accept"
}