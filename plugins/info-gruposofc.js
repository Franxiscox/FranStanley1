let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
✨ 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 𝕭𝖔𝖙 𝕱𝖗𝖆𝖓 𝕾𝖙𝖆𝖓𝖑𝖊𝖞ت︎ツ. ✨ 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 😸
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ ➤ 𝙂𝙧𝙪𝙥𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝘽𝙤𝙩:
1) *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
3) *http://instagram.com/franx_xiscox*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐚𝐪𝐮𝐢 𝐩𝐮𝐞𝐝𝐞 𝐦𝐚𝐧𝐝𝐚 𝐭𝐮 𝐞𝐧𝐥𝐚𝐜𝐞 𝐲 𝐭𝐚𝐦𝐛𝐢𝐞́𝐧 𝐬𝐢 𝐪𝐮𝐢𝐞𝐫𝐞 𝐮𝐧 𝐛𝐨𝐭 𝐩𝐚𝐫𝐚 𝐭𝐮 𝐠𝐫𝐮𝐩𝐨 𝐩𝐨𝐧𝐞𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .𝐣𝐨𝐢𝐧 (𝐦𝐚𝐬 𝐞𝐧𝐥𝐚𝐜𝐞)
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙦𝙪𝙚 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤 𝙖𝙥𝙖𝙧𝙚𝙯𝙘𝙖 𝙖𝙘𝙖 𝙝𝙖𝙗𝙡𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙖𝙙𝙢𝙞𝙣 𝙤𝙛𝙘 𝙙𝙚𝙡 𝙗𝙤𝙩
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Franxiscox', '𝕭𝖔𝖙 𝕱𝖗𝖆𝖓 𝕾𝖙𝖆𝖓𝖑𝖊𝖞ت︎ツ', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
