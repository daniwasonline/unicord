const Discord = require("discord.js");
exports.run = (client, message, args, level) => {
  const source = require("/app/evalmessages.js");
  const sayMessage = args.join(" ");
  message.delete();
  message.channel.send(sayMessage)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: "Bot Owner"
};

exports.help = {
  name: "say",
  description: "Pulls messages from Eval and sends them.",
  usage: "evalmessage"
};