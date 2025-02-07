let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    await conn.reply(m.chat, `> *_❒ Ahora Estás Ausente Hasta Que Vuelvas Enviar Un Nuevo Mensaje, Cuando Te Intenten Tagear El Usuario Será Notificado De Tu Ausencia Con El Motivo.\n\n${conn.getName(m.sender)} Esta AFK, Motivo ${text ? ': ' + text : ''}_*`, m, rcanal)
}
handler.help = ['afk *<razón>*']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
