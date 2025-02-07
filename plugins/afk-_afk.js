export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > 0) {
        await conn.reply(m.chat, `> *_❒ Dejaste De Estar AFK Despues De ${(new Date - user.afk).toTimeString()}_*`, m, rcanal)
        user.afk = 0
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        await conn.reply(m.chat, `> *_❒ El Usuario Que Intentas Etiquetar Esta AFK Por La Razón *${reason ? reason : '...'}* Durante *${(new Date - afkTime).toTimeString()}*.`, m)
    }
    return true
}
