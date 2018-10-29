const config = require("./config.json")
const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

//Time.getTime 47
// const Time = require("./timeutil")


bot.commands = new Discord.Collection();

bot.on('warn', console.warn);
bot.on('error', console.error);
bot.on('ready', () => console.log(`${bot.user.username} is ready!`));
bot.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));
bot.on('reconnecting', () => console.log('I am reconnecting now!'));

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Diesen Command konnte ich nicht finden.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} geladen!`);
    bot.commands.set(props.help.name, props);
  });
})


bot.on("guildCreate", guild => {
  console.log(`${guild.name} [Ownerid ${guild.ownerID}] {ID der Guild${guild.id}}`)
})

bot.on("guildMemberAdd", member => {
  console.log(`${member.id} joined the server.`)

  let welcomechannel = member.guild.channels.find(`name`, "welcome_leave")
  welcomechannel.send(`${member} joined the server.`)
}) 

// //Voicelog
// bot.on('voiceStateUpdate', (mold, mnew) => {
//   let guild = mnew.guild
        
//     let vold = mold.voiceChannel
//     let vnew = mnew.voiceChannel
//     let logchan = guild.channels.find("name", 'log_voice')
//     if(!logchan) return
//     if (!vold && vnew) {
//         let joinEmbed = new Discord.RichEmbed()
//             .setDescription(`:white_check_mark: **${mnew.displayName}** joined **\`${vnew.name}\`**`)
//             .setFooter(Time.getTime() + ` © by ${config.zekro}`)
//         logchan.send(joinEmbed)
//     }
//     else if (vold && !vnew) {
//         let leftEmbed = new Discord.RichEmbed()
//             .setTitle('')                  
//             .setDescription(`:small_red_triangle_down: **${mnew.displayName}** left **\`${vold.name}\`**`)
//             .setFooter(Time.getTime() + ` © by ${config.zekro}`)
//             logchan.send(leftEmbed)      
//     }
//     else if (vold && vnew && vold.id != vnew.id) {
//         let wentEmbed = new Discord.RichEmbed()
//             .setTitle('')
//             .setDescription(`:arrow_right: **${mnew.displayName}** went from **\`${vold.name}\`** to **\`${vnew.name}\`**`)
//             .setFooter(Time.getTime() + ` © by ${config.zekro}`)
//         logchan.send(wentEmbed)        
//     }
//   })




bot.on("guildMemberRemove", member => {
  console.log(`${member.id} leaved the server.`)

  let welcomechannel = member.guild.channels.find(`name`, "welcome_leave")
  welcomechannel.send(`${member} leaved the server.`)
}) 


bot.on("channelCreate", channel => {
    
      
    let createEmbed = new Discord.RichEmbed()
    .setDescription("Created Channel")
    .addField("Channel", `${channel}`)
    .addField("Created At", channel.createdAt)
    .setTimestamp(new Date())
  
    if(channel.guild === undefined) return
    let sChannel = channel.guild.channels.find(`name`, "log_niklas")
    if(sChannel === null) return
    sChannel.send(createEmbed)
})


bot.on("channelDelete", channel => {

  
  let createEmbed = new Discord.RichEmbed()
  .setDescription("Deleted Channel")
  .addField("Channel", `${channel.name}`)
  .addField("Deleted At", new Date())
  .setTimestamp(new Date())

  let sChannel = channel.guild.channels.find(`name`, "log_niklas")
  sChannel.send(`${channel.name} wurde gelöscht.`, createEmbed)
})

bot.on("ready", async () => {
    console.log(`${bot.user.username} ist online auf ${bot.guilds.size} Sever!`)
    console.log(`Der Bot ${bot.user.username} wurde erfolgreich gestartet und ist auf ${bot.guilds.size} Server, ${bot.channels.size} Channel und spielt mit ${bot.users.size} Usern.`); 
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    //client.user.setActivity(`#help | Auf ${client.guilds.size} Servern(Beta 2.2.0)`);
  //});
    
    bot.user.setActivity(`Auf ${bot.guilds.size} Servern Beta 0.6.5`, {type: "PLAYING"})
    
})

bot.on("message", message => {

  //Ausschalten damit Bots Ihn benutzen können
    if(message.author.bot) return
    
    if(message.channel.type === "dm") return


    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

    if(!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      }
    }


    let prefix = prefixes[message.guild.id].prefixes
    if(!message.content.startsWith(prefix))return;

    //let prefix = config.prefix
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)
    

    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if(commandfile) commandfile.run(bot, message, args)

  else if(cmd === `${config.prefix}help`) {

    // React to a message with a unicode emoji
    //message.react('🇳')
    
    //let prefix = config.prefix
    let helpEmbed = new Discord.RichEmbed()
      .setColor("#00AE86")
      .setThumbnail("https://cdn.pixabay.com/photo/2016/09/28/21/03/help-button-1701468_960_720.png")
      .setTitle("Help")
      .setDescription(`Dies ist die Hilfe für ${bot.user}`)
      .addField(`Hello <${prefix}hello>`, "Schick Hello!")
      .addField(`Botinfo <${prefix}botinfo>`, "Gibt dir eine Information über den Bot.")
      .addField(`Serverinfo <${prefix}serverinfo>`, "Gibt dir Infos über diesen Server.")
      .addField(`Ping <${prefix}ping>`, "Zeigt Ping vom Bot an.")
      .addField(`Fahrprüfung <${prefix}fahrprüfung>`, "Bestehst du die Fahrprüfung?")
      .addField(`8ball <${prefix}8ball [Frage]>`, "Beantwortet dir deine Frage aus vorgegebenen antworten. Die Antworten sind nicht 100% richtig!!!!")
      .addField(`Roll <${prefix}roll>`, "Würfelt!")
      .addField(`Dog <${prefix}dog`, "Zeigt ein random Hundebild an.")
      .addField(`Invite <${prefix}invite>`, "Schick den Invite-Link für den Bot.")
      .addField(`Membercount <${prefix}membercount>`, "Schick die Member die auf dem Server sind.")
      .addField(`Bug <${prefix}bug> [The bug you found]`, "Meldet einen Bug.")
      .addField(`Idguild <${prefix}idguild>`, "Zeigt die aktuelle ID der Guild an.")
      .addField(`Idchannel <${prefix}idchannel>`, "Zeigt die aktuelle ID des Channels an, wo man den Command ausführt.")
      .addField("Id´s", `${prefix}id´s`)
      .addField("Emojis", `${prefix}emojis`)

    let help1Embed = new Discord.RichEmbed()
      .setColor("#CC0000")
      .addField("Moderator", "Moderator Commands")
      .addField("Add Role", `${prefix}addrole <user> Rolename`)
      .addField("Remove Role", `${prefix}removerole <user> Rolename`)
      .addField("Clear", `${prefix}clear <number to delete messages>`)
      .addField("Prefix", `${prefix}prefix <new prefix>`)
      .addField("Report", `${prefix}report <user> reason`)
      .addField("Say", `${prefix}say <words to say>`)
      .addField("Tempmute", `${prefix}tempmute <user> <time in s/m/h/d>`)
      .addField("Kick", `${prefix}kick <user> reason`)
      .addField("Ban", `${prefix}ban <user> reason`)
      .addField("CreateChannel", `${prefix}createchannel <name> type of the channel`)
      .addField("CreateTextChannel", `${prefix}createtextchhannel <name>`)
      .addField("CreateVoiceChannel", `${prefix}createvoicechannel <name>`)
      .addField("Nick", `${prefix}nick <user> nickname`)
      .addField("Vociemove", `${prefix}movevoice <ID>`)
      

    let help2Embed = new Discord.RichEmbed()
      .setColor("#330033")
      .setTitle("Channels you need:" )
      .addField("#reportsniklas", "For see the reports.")
      .addField("#welcome_leave", "For see who joined and leaved.")
      .addField("#log_niklas", "For seeing moderations things.")
      .addField("#kicked_banned", "For see who was kicked/banned.")
      .addField("#log_voice", "For see the voicelog.")
      .setDescription("#reportsniklas      #welcome_leave      #log_niklas      #kicked_banned      #log_voice")
      .setFooter(`© by ${config.botowner}`)


      let guild = message.guild

      message.delete().catch(O_o=>{});
      message.reply("I will send you a DM in few seconds.")
      message.author.send(helpEmbed)
      message.author.send(help1Embed)
      if(message.author.id === guild.ownerID) {
      message.author.send(help2Embed)
      }
    }
    else if(cmd === `${prefix}help`) {

      // React to a message with a unicode emoji
      //message.react('🇳')
      
      //let prefix = config.prefix
      let helpEmbed = new Discord.RichEmbed()
        .setColor("#00AE86")
        .setThumbnail("https://cdn.pixabay.com/photo/2016/09/28/21/03/help-button-1701468_960_720.png")
        .setTitle("Help")
        .setDescription(`Dies ist die Hilfe für ${bot.user}`)
        .addField(`Hello <${prefix}hello>`, "Schick Hello!")
        .addField(`Botinfo <${prefix}botinfo>`, "Gibt dir eine Information über den Bot.")
        .addField(`Serverinfo <${prefix}serverinfo>`, "Gibt dir Infos über diesen Server.")
        .addField(`Ping <${prefix}ping>`, "Zeigt Ping vom Bot an.")
        .addField(`Fahrprüfung <${prefix}fahrprüfung>`, "Bestehst du die Fahrprüfung?")
        .addField(`8ball <${prefix}8ball [Frage]>`, "Beantwortet dir deine Frage aus vorgegebenen antworten. Die Antworten sind nicht 100% richtig!!!!")
        .addField(`Roll <${prefix}roll>`, "Würfelt!")
        .addField(`Dog <${prefix}dog`, "Zeigt ein random Hundebild an.")
        .addField(`Invite <${prefix}invite>`, "Schick den Invite-Link für den Bot.")
        .addField(`Membercount <${prefix}membercount>`, "Schick die Member die auf dem Server sind.")
        .addField(`Bug <${prefix}bug> [The bug you found]`, "Meldet einen Bug.")
        .addField(`Idguild <${prefix}idguild>`, "Zeigt die aktuelle ID der Guild an.")
        .addField(`Idchannel <${prefix}idchannel>`, "Zeigt die aktuelle ID des Channels an, wo man den Command ausführt.")
        .addField("Id´s", `${prefix}id´s`)
        
      let help1Embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .addField("Moderator", "Moderator Commands")
        .addField("Add Role", `${prefix}addrole <user> Rolename`)
        .addField("Remove Role", `${prefix}removerole <user> Rolename`)
        .addField("Clear", `${prefix}clear <number to delete messages>`)
        .addField("Prefix", `${prefix}prefix <new prefix>`)
        .addField("Report", `${prefix}report <user> reason`)
        .addField("Say", `${prefix}say <words to say>`)
        .addField("Tempmute", `${prefix}tempmute <user> <time in s/m/h/d>`)
        .addField("Kick", `${prefix}kick <user> reason`)
        .addField("Ban", `${prefix}ban <user> reason`)
        .addField("CreateChannel", `${prefix}createchannel <name> type of the channel`)
        .addField("CreateTextChannel", `${prefix}createtextchhannel <name>`)
        .addField("CreateVoiceChannel", `${prefix}createvoicechannel <name>`)
        .addField("Nick", `${prefix}nick <user> nickname`)
        .addField("Vociemove", `${prefix}movevoice <ID>`)
  
      let help2Embed = new Discord.RichEmbed()
        .setColor("#330033")
        .setTitle("Channels you need:" )
        .addField("#reportsniklas", "For see the reports.")
        .addField("#welcome_leave", "For see who joined and leaved.")
        .addField("#log_niklas", "For seeing moderations things.")
        .addField("#kicked_banned", "For see who was kicked/banned.")
        .addField("#log_voice", "For see the voicelog.")
        .setDescription("#reportsniklas      #welcome_leave      #log_niklas      #kicked_banned      #log_voice")
        .setFooter(`© by ${config.botowner}`)
  
  
        let guild = message.guild
  
        message.delete().catch(O_o=>{});
        message.reply("I will send you a DM in few seconds.")
        message.author.send(helpEmbed)
        message.author.send(help1Embed)
        if(message.author.id === guild.ownerID) {
        message.author.send(help2Embed)
        }
      }
  
    if(cmd === `${prefix}hello`){
      return message.channel.send("Hello!")
    }
 
})



bot.on('messageReactionAdd', (reaction, user) => {
  let supserver = '457280819501727746'
  let member = reaction.message.guild.member(user)
  if (reaction.emoji.name === 'newspaper' && reaction.message.channel.id === supserver)
  member.addRole('457282061808697345')
  if (reaction.emoji.name === 'newspaper2' && reaction.message.channel.id === supserver)
  member.addRole('457282061808697345')
  // if (reaction.emoji.name === 'fortnite' && reaction.message.channel.id === '451849889920450570')
  // member.addRole('451853116946776067')
  // if (reaction.emoji.name === 'lol' && reaction.message.channel.id === '451849889920450570')
  // member.addRole('456887128417239041')
});
  

bot.login(config.token)