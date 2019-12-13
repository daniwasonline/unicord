exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
      message.channel.fetchMessages({
      limit: 1
    }).then(messages => message.channel.bulkDelete(messages));
  
  if (!args[0]) {
    message.channel.send("You need to specify a number of messages to delete!");
    return;
  } else {
  
  
    const messagecount = parseInt(args.join(" "));
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
  };

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prune"],
  permLevel: "Moderator"
};

exports.help = {
  name: "purge",
  category: "System",
  description: "Bulk-delete command.",
  usage: "purge [number]"
};