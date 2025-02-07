let handler = async (m, { text }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) return conn.reply(m.chat, `> *_❒ Ingresa El Nombre Del Comamdo_*`, m, rcanal)
try {
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, `> *_❒ No Puedes Borrar Este Comando_*`, m, rcanal)
delete sticker[hash]
await conn.reply(m.chat, `> *_❒ Comando Eliminado Con Exito_*`, m, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['cmd'].map(v => 'del' + v + ' *<texto>*')
handler.tags = ['cmd']
handler.command = ['delcmd']
handler.owner = true

export default handler
