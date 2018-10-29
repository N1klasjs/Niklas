const Discord = require('discord.js')
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", 'utf8'))

exports.run = async (bot, message, args) => {

    if(message.author.id === config.botownerid) {
        let name = "poll"
    if (!args) return message.reply("You must have something to vote for!")
    if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
        message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
        const pollTopic = await message.channel.send(message.content.slice(config.prefix.length + name.length));
        await pollTopic.react(`✅`);
        await pollTopic.react(`⛔`);

        // Create a reaction collector
        const filter = (reaction) => reaction.emoji.name === '✅';
        const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }
}
module.exports.help = {
    name: "pool"
}