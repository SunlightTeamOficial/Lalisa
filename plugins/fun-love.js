let handler = async (m, { conn, command, text }) => {
return conn.reply(m.chat,`> *_❒ El Amor De ${text} Por Ti Es De ${Math.floor(Math.random() * 100)}% de un 100%_*
`, m, rcanal)
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love *@user*']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
