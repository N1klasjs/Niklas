const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Ich konnte den User nicht finden.")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Ich kann ihn nicht muten")
    let muterole = message.guild.roles.find(`name`, "mute")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name:   "muted",
                color:  "#000000",
                permissions:[]
            })
            message.guild.channel.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            })
        }catch(e) {
            console.log(e.stack)
        }
    } 
    
    let mutetime = args[1]
    if(!mutetime) return message.reply("Schreibe eine bestimmte Zeit.")

    await(tomute.addRole(muterole.id))
    message.reply(`<@${tomute.id}> ist für ${ms(ms(mutetime))} gemutet`)

    setTimeout(function() {
      tomute.removeRole(muterole.id)
      message.channel.send(`<@${tomute.id}> ist entmutet.`)
    }, ms(mutetime))
}

module.exports.help = {
    name: "tempmute"
}