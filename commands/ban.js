const Discord = require("discord.js");
exports.run = (client, message, args, level) => {
  const modlog = message.guild.channels.find(channel => channel.name === "mod-log");
  const user = message.mentions.users.first();
  const reason = args.slice(1).join(" ");
  if (!modlog) { 
    
    var server = message.guild;

    server.createChannel("mod-log");
    
    message.channel.send("I couldn't see a mod channel. Creating one now**...**");
  
    return; 
  };
  if (reason.length < 1) return message.reply("There needs to be a reason for the bAM.");
  if (message.mentions.users.size < 1) return message.reply("You've gotta mention the person you want to bAM.").catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply("I cannot bAM that member, my permissions are too underpowered for this kind of bAM!");
  message.guild.ban(user, 2);


  const embed = new Discord.RichEmbed()
    .setFooter("Unicord")
    .setColor("#7CFC00")
    .setTimestamp()
    .setTitle("Ban")
    .setDescription(`**Offender:** ${user.tag}\n**Staff Member:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bam"],
  permLevel: "Moderator"
};

exports.help = {
  name: "ban",
  description: "Bans the mentioned user.",
  usage: "ban [mention] [reason]"
};