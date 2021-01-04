const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["786595839521849384", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.reply(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
const family = message.guild.roles.cache.find(r => r.id === '786597127106985994')
const kayıtlı = message.guild.roles.cache.find(r => r.id === '786597130834935858')
const kayıtlı2 = message.guild.roles.cache.find(r => r.id === '786597131527389224')
const kayıtlı3 = message.guild.roles.cache.find(r => r.id === '786690843968012338')
const kadın = message.guild.roles.cache.find(r => r.id === '786597129274654720')
const kadın2 = message.guild.roles.cache.find(r => r.id === '786597129874309142')
const kadın3 = message.guild.roles.cache.find(r => r.id === '786597135310913586')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '786597132218925056')

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send('Bir Kullanıcı Belirt.')
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Etiketlenen kullanıcı ile Üst/Aynı pozisyonda bulunuyorsunuz.')
const x = message.guild.member(member)
let bilgi = db.get(`yetkili.${member.id}`);
  

let tag = "ⁿᵉˣᵗ"
let isim = args[1]
let yas = Number(args[2])

  
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kayıtsız)
x.roles.remove(kadın)
x.roles.remove(kadın2)
x.roles.remove(kadın3)
x.roles.remove(kayıtlı)
x.roles.remove(kayıtlı2)
x.roles.remove(kayıtlı3)
x.roles.remove(family)

  
const embed = new dc.MessageEmbed()
.setDescription(`
<a:limemati:785924913533157406>  ${member} Adlı Kullanıcı <@${message.author.id}> Tarafından Kayıtsıza   atıldı.
<a:limemati:785924913533157406>  Kullanıcı \`${kayıtsız} \` Olarak Güncellendi ${kayıtsız} Rolü Verildi
`)
.setColor('PURPLE')
.setFooter(``) 
.setImage('')
message.channel.send(embed)

  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıtsız","ks","un"],
    permLevel: 0
};

exports.help = {
    name: "unreg"
}

