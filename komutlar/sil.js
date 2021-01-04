exports.run = function(client, message, args) {
  const sayi = args.slice(0).join('');
if(sayi.length < 1) {
  return message.reply("Silmem İçin Bir Miktar Belirt")
} else {
  message.channel.bulkDelete(sayi);
message.channel.send("**" + sayi + "** mesaj sildim");
}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sil', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'sil'
};