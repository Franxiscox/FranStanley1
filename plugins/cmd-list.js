dejar manejador = asรญncrono (m, {conn}) => {
conn.reply(m.chat, `
*<

${Object.entries(global.db.data.sticker).map(([clave, valor], รญndice) => `*${รญndice + 1}.-*\n*๐ฒ๐พ๐ณ๐ธ๐ถ๐พ:* ${valor.bloqueado ? `*(๐๐๐๐๐๐๐๐๐)* ${clave}` : clave}\n*๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ/๐๐ด๐๐๐พ* ${valor.texto}`).join('\n\n')}
`.trim(), null, {menciones: Object.values(global.db.data.sticker).map(x => x.mencionadoJid).reduce((a, b) => [...a, . ..b], [])})
}
manejador.comando = ['listcmd', 'cmdlist']
controlador.propietario = verdadero
controlador predeterminado de exportaciรณn
