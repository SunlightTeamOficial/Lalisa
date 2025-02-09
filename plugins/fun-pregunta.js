let handler = async (m, { command, text }) => return conn.reply(m.chat,`
*⁉️ 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 ⁉️*
  
*𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰:* ${text}
*𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible'].getRandom()}, m, rcanal)
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta *<texto>*']
handler.tags = ['fun']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
