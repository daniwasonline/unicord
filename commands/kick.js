const Discord = require("discord.js");
exports.run = (client, message, args, level) => {
  const reason = args.slice(1).join(" ");
  const user = message.mentions.users.first();
  const modlog = message.guild.channels.find(channel => channel.name === "mod-log");
  if (!modlog) { 
    
    var server = message.guild;

    server.createChannel("mod-log");
    
    message.channel.send("I couldn't see a mod channel. Creating one now**...**");
  
    return; 
  };
  if (reason.length < 1) return message.reply("There needs to be a reason for the kick.");
  if (message.mentions.users.size < 1) return message.reply("You've gotta mention the person you want to kick.").catch(console.error);
  if (!message.guild.member(user).kickable) return message.reply("I can't kick that person!");

  
  
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setFooter("Unicord")
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle("Kick")
    .setDescription(`**Offender:** ${user.tag}\n**Staff Member:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: "Moderator"
};

exports.help = {
  name: "kick",
  description: "Kicks the mentioned user.",
  usage: "kick [mention] [reason]"
};