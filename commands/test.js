const Discord = require("discord.js")

// module.exports.run = async(bot, message, args) => {
//     let a = 10
//     let b = 40
//     let c = 2
//     let d = 4
//     let ent = b - a * c / d
//     // 286868 * 43363636 / 5987 + 838588877 - 24966886
//     message.channel.send(ent)
// }



// module.exports.run = async(bot, message, args) => {
//     function getTime(date) {
//         function btf(inp) {
//             if (inp < 10)
//             return "0" + inp;
//             return inp;
//         }
//         if (!date)
//             date = new Date()
//         let y = date.getFullYear(),
//             m = btf(date.getMonth() + 1),
//             d = btf(date.getDate()),
//             h = btf(date.getHours()),
//             min = btf(date.getMinutes()),
//             s = btf(date.getSeconds());
//         return `${h}:${min}:${s} - ${d}/${m}/${y}`;
    
//     }
//     function btf(inp) {
//         if (inp < 10)
//         return "0" + inp;
//         return inp;
//     }
//     let date = new Date()
//         let y = date.getFullYear()
//         let m = btf(date.getMonth() + 1)
//         let d = btf(date.getDate())
//     let a = d
//     let b = m * 30
//     let c = y * 365
//     let aktuell = a + b + c
//     console.log(aktuell)
    
// }
// module.exports.help = {
//     name: "test"
// }
module.exports.run = async(bot, message, args) => {

        let guild = message.member.guild
        let membs = guild.members
        let chans = guild.channels
        let roles = guild.roles
        let owner = guild.owner
    
        let emb = new  Discord.RichEmbed()
            .setTitle(guild.name + ' - Guild Info')
            .setColor(guild.owner.highestRole.color)
            .addField('ID', `\`\`\`${guild.id}\`\`\``)
            .addField('Owner', `<@${owner.id}> - ${owner.user.tag} *(${owner.id})*`)
            .addField('Created At', guild.createdAt)
            .addField('Region', guild.region)
            .addField(
                'Members',
                '```\n' +
                `Total Members:   ${membs.array().length}  (${membs.filter(m => m.presence.status != 'offline').array().length} online)\n` +
                `Real Members:    ${membs.filter(m => !m.user.bot).array().length}  (${membs.filter(m => !m.user.bot && m.presence.status != 'offline').array().length} online)\n` +
                `Bots:            ${membs.filter(m => m.user.bot).array().length}  (${membs.filter(m => m.user.bot && m.presence.status != 'offline').array().length} online)\n` +
                '```\n'
            )
            .addField(
                'Channels',
                '```\n' +
                `Text Channels:    ${chans.filter(c => c.type == 'text').array().length}\n` +
                `Voice Channels:   ${chans.filter(c => c.type == 'voice').array().length}\n` +
                `Categories:       ${chans.filter(c => c.type == 'category').array().length}\n` +
                '                  -------\n' +
                `                  ${chans.array().length}\n` +
                '```'
            )
            .addField(
                'Roles',
                '```' +
                roles.map(r => {
                    return `${r.name} (${r.members.filter(m => m.presence.status != 'offline').array().length}/${r.members.array().length})`
                }).slice(0, 80).join('\n') +
                '```' +
                (roles.array().length > 80 ? `and ${roles.array().length - 80} roles more...` : '')
            )
    
        if (guild.emojis.array().length)
            emb.addField('Emojis', guild.emojis.map(e => `<:${e.name}:${e.id}>`).join(' '))
    
        if (guild.iconURL)
            emb.setThumbnail(guild.iconURL)
    
        message.channel.send('', emb)
    
}

module.exports.help ={
    name: "test"
}

// let mchannel = message.mentions.channels.first()
//     console.log(mchannel.id)