let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;⁩Oso;;\nFN:Oso\nORG:Oso\nTITLE:\nitem1.TEL;waid=51939658716:51939658716\nitem1.X-ABLabel:⁩Oso\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Oso\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '⁩Oso', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler