exports.run = (client, message, args, level) => {
  const reason = args.slice(1).join(" ");
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = args[0];
  const modlog = client.channels.find("name", "mod-log");
  if (!modlog) { 
    
    var server = message.guild;

    server.createChannel("mod-log");
    
    message.reply("I couldn't see a mod channel. Creating one now**...**");
  
    return; 
  };
  if (reason.length < 1) return message.reply("You've gotta say why they were unbanned!");
  if (!user) return message.reply("Provide a User ID or any other user resolvable so I can unban who you are unbanning.").catch(console.error);
  message.guild.unban(user);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unbam"],
  permLevel: "Moderator"
};

exports.help = {
  name: "unban",
  description: "Unbans the user.",
  usage: "unban [mention] [reason]"
};