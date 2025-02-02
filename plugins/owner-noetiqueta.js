let handler = async (m, { conn, usedPrefix, isOwner }) => {
await m.react('😺')
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;⁩Oso;;\nFN:Oso\nORG:Oso\nTITLE:\nitem1.TEL;waid=51939658716:51939658716\nitem1.X-ABLabel:\nX-WA-BIZ-DESCRIPTION:Oso\nX-WA-BIZ-NAME:Oso\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Oso', contacts: [{ vcard }] }}, {quoted: m})
}
handler.customPrefix = /^(@51939658716|@5218132588591|@5218139760662|@5215659171599)$/i
handler.command = new RegExp
export default handler