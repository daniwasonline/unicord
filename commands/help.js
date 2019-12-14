/*
The HELP command is used to display every command"s name and description
to the user, so that he may see what commands are available. The help
command is also filtered by level, so if a user does not have access to
a command, it is not shown to them. If a command name is given with the
help command, its extended help is shown.
*/
const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  const UwU = new Discord.RichEmbed()
    .setColor("#0099ff")
    .setTitle("Commands")
    .setAuthor("Help Module")
    .setDescription("If you are seeing this, it means that the developers of your server's instance of Unicord have not implemented a command list. That being said, you can still probably use the commands listed [here](https://sites.google.com/view/unicord/commands).")
    .setTimestamp()
    .setFooter("Unicord");
  message.channel.send(UwU);
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "System",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
