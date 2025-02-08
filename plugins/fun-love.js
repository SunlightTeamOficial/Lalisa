let handler = async (m, { conn, command, text }) => {
if (!args[0]) return conn.reply(m.chat,`*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*
`, m, rcanal)
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love *@user*']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
