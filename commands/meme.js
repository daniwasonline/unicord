const got = require("got");
const Discord = require("discord.js");
exports.run = async (client, message, args, level) => { 
  const embed = new Discord.RichEmbed();
  got("https://www.reddit.com/r/memes/random/.json").then(response => {
    const content = JSON.parse(response.body);
    const permalink = content[0].data.children[0].data.permalink;
    const memeUrl = `https://reddit.com${permalink}`;
    const memeImage = content[0].data.children[0].data.url;
    const memeTitle = content[0].data.children[0].data.title;
    const memeUpvotes = content[0].data.children[0].data.ups;
    const memeDownvotes = content[0].data.children[0].data.downs;
    const memeNumComments = content[0].data.children[0].data.num_comments;
    embed.addField(`${memeTitle}`, `[(Visit on Reddit)](${memeUrl})`);
    embed.setImage(memeImage);
    embed.setFooter(`${memeUpvotes} upvotes`);
    embed.setColor("#7289da");
    message.channel.send(embed)
      .then(sent => console.log(`Sent a reply to ${sent.author.username}`));
    console.log("Bot responded with: " + memeImage);
  }).catch(console.error);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "meme",
  category: "Fun",
  description: "Gives you a meme from r/memes.",
  usage: "memes"
};