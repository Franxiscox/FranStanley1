importar {addExif} desde '../lib/sticker.js'
dejar manejador = asíncrono (m, { conexión, texto }) => {
if (! M.Quoted) Throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚈 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾𝙼𝙱𝚁𝙴*'
dejar pegatina = falso
probar {
let [nombre del paquete, ...autor] = texto.split('|')
autor = (autor || []).join('|')
let mime = m.quoted.mimetype || ''
if (! /webp/.test (mime)) Throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*'
let img = esperar m.quoted.download()
if (! img) Throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾𝙼𝙱𝚁𝙴*'
stiker = esperar addExif(img, nombre del paquete || '', autor || '')
} atrapar (e) {
consola.error(e)
if (Buffer.isBuffer(e)) pegatina = e
} finalmente {
if (etiqueta) conn.sendFile(m.chat, etiqueta, 'wm.webp', '', m, false, { asSticker: true })
De lo contrario lanza '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙰𝙻𝙶𝙾 𝙵𝙰𝙻𝙻𝙾 .. 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙾 𝙰 𝚄𝙽 𝚈 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
}}
handler.help = ['wm <nombre del paquete>|<autor>']
handler.tags = ['pegatina']
manejador.comando = /^robar|wm$/i
controlador predeterminado de exportación
