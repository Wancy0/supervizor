const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["786597117232939058", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.reply(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
  
const Vip = message.guild.roles.cache.find(r => r.id === '786597125601493003')

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send('Bir Kullanıcı Belirt.')
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Etiketlenen kullanıcı ile Üst/Aynı pozisyonda bulunuyorsunuz.')
const x = message.guild.member(member)
let bilgi = db.get(`yetkili.${member.id}`);
  
  
x.roles.add(Vip)


  

  
const embed = new dc.MessageEmbed()
.setDescription(`
<a:limemati:785924913533157406>   ${member} **Adlı Değerli Üyemize** <@${message.author.id}> **Tarafından    .
<a:limemati:785924913533157406> ** \`Vip Rolü\`  ${Vip} **Rolü Verildi**
`)
.setColor('RANDOM')
.setImage('https://media.giphy.com/media/1AIQbMHjcNy5lwE3Uf/giphy.gif')
.setFooter(``)
message.channel.send(embed)

  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["vip", "v", "special", "özel"],
    permLevel: 0
};

exports.help = {
    name: "vip"
}

