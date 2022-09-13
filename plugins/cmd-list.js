dejar manejador = asíncrono (m, {conn}) => {
conn.reply(m.chat, `
*<

${Object.entries(global.db.data.sticker).map(([clave, valor], índice) => `*${índice + 1}.-*\n*𝙲𝙾𝙳𝙸𝙶𝙾:* ${valor.bloqueado ? `*(𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘)* ${clave}` : clave}\n*𝙲𝙾𝙼𝙰𝙽𝙳𝙾/𝚃𝙴𝚇𝚃𝙾* ${valor.texto}`).join('\n\n')}
`.trim(), null, {menciones: Object.values(global.db.data.sticker).map(x => x.mencionadoJid).reduce((a, b) => [...a, . ..b], [])})
}
manejador.comando = ['listcmd', 'cmdlist']
controlador.propietario = verdadero
controlador predeterminado de exportación
