const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.reply(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
  
const Katıldı = message.guild.roles.cache.find(r => r.id === '786597120425590854')

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send('Bir Kullanıcı Belirt.')
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Etiketlenen kullanıcı ile Üst/Aynı pozisyonda bulunuyorsunuz.')
const x = message.guild.member(member)
let bilgi = db.get(`yetkili.${member.id}`);
  
  
x.roles.add(Katıldı)


  

  
const embed = new dc.MessageEmbed()
.setDescription(`
<a:limemati:785924913533157406>   ${member} **Adlı  Yetkilimize** <@${message.author.id}> **Tarafından    .
<a:limemati:785924913533157406> ** \`Katıldı \`  ${Katıldı} **Rolü Verildi**
`)
.setColor('BLUE')
.setFooter(``)
message.channel.send(embed)

  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["katıldı", "ktl", "", ""],
    permLevel: 0
};

exports.help = {
    name: "katıldı"
}

