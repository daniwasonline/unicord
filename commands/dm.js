const Discord = require("discord.js");
exports.run = (client, message, args, level) => {
   let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ")
    if(dMessage.length < 1) return message.reply('supply message or else')
    message.delete();
    dUser.send(`${dMessage}`)

    message.author.send(`${message.author} You have sent your message to ${dUser}`)

};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["directmessage"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "dm"
};