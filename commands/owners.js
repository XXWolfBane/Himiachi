module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi owners!")
  .setDescription(`My current owners are <@276040277293268992>, <@251928361851551756>, <@302958364529262595>`)
  .setFooter(message.author.username)
  .setTimestamp()
  .setColor(GREEN)
    message.channel.send({embed: em}).then(m => m.delete(10000))
}

modules.export.help = {
  name: "owners"
}

