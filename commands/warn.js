const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first();
  const modlog = message.guild.channels.find(channel => channel.name === "mod-log");
  if (!modlog) { 
    
    var server = message.guild;

    message.guild.createChannel("mod-log");
    
    message.channel.send("I couldn't see a mod channel. Creating one now**...**");
  
    return; 
  };
  if (message.mentions.users.size < 1) return message.reply("You've gotta mention who you want to warn!").catch(console.error);
  const reason = args.splice(1, args.length).join(" ");
  
  
  message.channel.send(`***${user.tag} has been warned, ${reason}***`);
  
  const embed = new Discord.RichEmbed()
    .setFooter("Unicord")
    .setColor("#ff0000")
    .setTimestamp()
    .setTitle("Warn")
    .setDescription(`**Warned:** ${user.tag}\n**Staff Member:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warning"],
  permLevel: "Moderator"
};

exports.help = {
  name: "warn",
  description: "Issues a warning to the mentioned user.",
  usage: "warn [mention] [reason]"
};