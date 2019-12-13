// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const code = args.join(" ");
  const Discord = require("discord.js");
  const initHell = async () => {
    message.delete();
    const sayMessage = args.join(" ");
    const welcomeinfoport = new Discord.RichEmbed()
      .setFooter("Twitter Retweets", "https://help.twitter.com/content/dam/help-twitter/brand/logo.png")
      .setColor("#7289da")
      .setTimestamp()
      .setTitle("Tweet")
      .setAuthor("@TheRealKnightB", "https://pbs.twimg.com/profile_images/1094468652491956225/Ukdj96Bl_200x200.jpg", "https://twitter.com/TheRealKnightB")
      .setDescription("my footdick this big 8=======================D")
      .addField("Retweets", "42069")
      .addField("Likes", "69420")
      .addField("Comments", "6969");
    message.channel.send("i LOVE his pic he penetrated me with his foot-dick combo and he's coming tonight again :heart_eyes:");
    message.channel.send(welcomeinfoport)
      .then(function(message) {
        message.react("🌟");
      });
  };
  

  
  try {
    const evaled = eval(code);
    const clean = await client.clean(client, evaled);
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "eval",
  category: "System",
  description: "Evaluates arbitrary javascript.",
  usage: "eval [...code]"
};
