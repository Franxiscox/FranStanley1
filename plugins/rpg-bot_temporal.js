let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
  if (!global.db.data.settings[conn.user.jid].temporal) throw `${ag}π΄π πππππππ ππ πππππππππππ ππππΜ πππππππ ππ πππππππ ππ πππ πππππππππππππ π ππππππ ππππππ ππΜπ πππππ π ππ ππ πππππ πππ πππ πππ  *#on temporal* π·πππ πππππππ`
  
  if (!args[0]) throw `${mg}πΌππ ππ πππππππ ππππ ππππ πππππππ\n*${usedPrefix + command} π¬πππππ ππΜππππ ππ πππππ(s)*\n\n*π¬ππππππ*\n*${usedPrefix + command} ${nn} 3*\n\n*3 π»ππππ πͺ = 30 πππππππ`
let [_, code] = args[0].match(linkRegex) || [] 
if (!linkRegex.test(args[0])) throw `${fg}π¬πππππ ππ ππΜππππ.` //AquΓ­ 

    
  //if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
let user = db.data.users[m.sender]

  if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let img = 'https://i.imgur.com/8fK4h6F.jpg'
if (user.joincount < 1) throw `${ag}*Β‘ππ ππ πππππ ππππππ! πͺ*\n\n*πͺπππππ ππππππ ππππ πππππ πππππππ π π»ππ π³ππππππ-π΄π« π ππ πππππ πππ ππ πππππππ ${usedPrefix}buy3 o ${usedPrefix}buyall3* *πͺπππππππ*`
 //if (user.joincount === 0 ) throw `${ag}*Β‘YA NO TIENES TOKENS! πͺ*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TΓ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`  
 if (!args[1]) throw `${mg}πΌππ ππ πππππππ ππππ ππππ πππππππ\n*${usedPrefix + command} π¬πππππ ππΜππππ ππ πππππ(s)*\n\n*π¬ππππππ*\n*${usedPrefix + command} ${nn} 3*\n\n*3 π»ππππ πͺ = 30 πππππππ*`
 if (!linkRegex.test(args[0])) throw `${fg}π¬πππππ ππ ππΜππππ` //AquΓ­ 
 if (isNaN(args[1])) throw `${mg}*πΊπππ π°ππππππ ππ ππΜππππ ππ πππππ(S)*`
 if (args[1] < 3) throw `${fg}*π΄πΜππππ 3 πππππ(S) ππππ πππππ πππππππ π π­ππ π±πππ πΎππππππΨͺοΈγ`
 if (args[1] > 3) throw `${fg}*π΄πΜππππ 3 πππππ(S) π·πππ πππππ πππππππ π π­ππ π±πππ πΎππππππΨͺοΈγ*` //Solo ingresarΓ‘ si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}π πΊπ ππ πππππ π­ππ π±πππ πΎππππππΨͺοΈγ ππ πππππ!!!*`, m).then(async() => { 
  user.joincount -= args[1] 
 var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
 var now = new Date() * 1
//let res = await conn.groupAcceptInvite(code) 
//conn.reply(m.chat, `${eg}π» *πΊπ ππ πππππ π­ππ π±πππ πΎππππππΨͺοΈγ ππ πππππ!!!*`, m).then(async() => {
 //var jumlahHari = 600000 * 1 // 10 minutos | Usuarios
// var now = new Date() * 1 
 
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `β πΊπ ππ πππππ ππ πππππ!!!\n${await conn.getName(res)}\n\nπΉπππππππ πππ ππ β³ ππππππππ, πππ ππ πππππππ ${usedPrefix}menu π·πππ πππ ππ ππππΜ*\n\nπͺ π΄π ππππππΜ ππππππΜπππππππππ ππ:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} π³π πππππ ${user.joincount} πππππ(S) πͺ*\n\nβ *π·ππππ ππππ ππ πππππππ ππππππΜπ ππ πππππ ππππππππ ππππΜ ππ\n\nβ *πΊπ ππππππ πππ ππππΜ πππ ππΜπ ππππππ πππππππ ππ ππΜππππ ππ ππππππ πͺπππππ πππ ππ πππππππ\n*${usedPrefix + command}*\n\nβ *π¬π ππππ πππ  ππ πππππ ππ πππππππΜ πππ πππππ π ππππππ πππ ππππππ πππππππ ππ ππ πππ πππππ`, m)
await conn.reply(m.chat, `${wm} *π¬π ππ πππ ππ πΎπππππ¨ππ πππ ππ πππππππΜ π ππππππππ πππππππππ πππππππππππ πͺ π¨π πππππππ π πππππ π ππππππΜπ ππ πππ π ππππππππ π  πͺππ πππ ππΜπππππππ πππππππππ, π«πππππππ ππ π­ππ π±πππ πΎππππππΨͺοΈγ!!! πΈ*\n\nπ *π­ππ π±πππ πΎππππππΨͺοΈγ πππ ππππππππ πππ:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} π¨ππππππππ ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, π¬π πππ ππ πππππ π ππππππ: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
}})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*Β‘ππ ππ πππππ ππππππ! πͺ*\n\n*πͺπππππ ππππππ ππππ πππππ πππππππ π π­ππ π±πππ πΎππππππΨͺοΈγ π ππ πππππ πππ ππ πππππππ ${usedPrefix}buy3* *πͺπππππππ*`
  if (!args[1]) throw `${mg}*πΌππ ππ πππππππ ππππ ππππ πππππππ*\n*${usedPrefix + command} π¬πππππ ππΜππππ ππ πππππ(s)*\n\n*π¬ππππππ*\n*${usedPrefix + command} ${nn} 3*\n\n*3 π»ππππ πͺ = 30 πππππππ*`
if (!linkRegex.test(args[0])) throw `${fg}π¬πππππ ππ ππΜππππ .` //AquΓ­ 

  let res = await conn.groupAcceptInvite(code) 
  conn.reply(m.chat, `${eg}π πΊπ ππ πππππ π­ππ π±πππ πΎππππππΨͺοΈγ ππ πππππ!!!`, m).then(async() => { //Si el Owner se une al Grupo no habrΓ‘ temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `β πΊπ ππ πππππ ππ πππππ!!!\n${await conn.getName(res)}\n\n*πΉπππππππ πππ ππ β³ ππππππππ, πππ ππ πππππππ ${usedPrefix}menu π·πππ πππ ππ ππππΜ\n\nπͺ *π΄π ππππππΜ ππππππΜπππππππππ ππ:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} π³π πππππ ${user.joincount} πππππ(S) πͺ*\n\nβ *π·ππππ ππππ ππ πππππππ ππππππΜπ ππ πππππ ππππππππ ππππΜ ππ*\n\nβ πΊπ ππππππ πππ ππππΜ πππ ππΜπ ππππππ πππππππ ππ ππΜππππ ππ ππππππ πͺπππππ πππ ππ πππππππ\n*${usedPrefix + command}*\n\nβ π¬π ππππ πππ  ππ πππππ ππ πππππππΜ πππ πππππ π ππππππ πππ ππππππ πππππππ ππ ππ πππ πππππ.`, m)  
await conn.reply(m.chat, `${wm} π¬π ππ πππ ππ πΎπππππ¨ππ πππ ππ πππππππΜ π ππππππππ πππππππππ πππππππππππ πͺ π¨π πππππππ π πππππ π ππππππΜπ ππ πππ π ππππππππ π πͺππ πππ ππΜπππππππ πππππππππ, π«πππππππ ππ π­ππ π±πππ πΎππππππΨͺοΈγ!!! πΈ*\n\nπ *π­ππ π±πππ πΎππππππΨͺοΈγ πππ ππππππππ πππ:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} π¨ππππππππ ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, π¬π πππ ππ πππππ π ππππππ: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creadora', `/creadora`], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], m, res) })}
    
}

handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd'] ///^(temporal|tiempo)$/i
export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " *DΓ­a(s)* βοΈ\n" + hours + " *Hora(s)* β³\n" + minutes + " *Minuto(s)* β°\n" + sec + " *Segundo(s)* π\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
