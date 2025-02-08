let handler = async (m, { conn, usedPrefix, command}) => {
let pp = 'https://tinyurl.com/26djysdo'
let pp2 = 'https://tinyurl.com/294oahv9'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return conn.reply(m.chat, '> *_❒ Menciona Al Usuario_*', m, rcanal)
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

return conn.reply(m.chat,`> *_❒ ${name}` + ' Está Bailando Con' + ` ${name2}` + ' (ﾉ^ヮ^)ﾉ*:・ﾟ✧_*', m, rcanal)
}
handler.help = ['dance *<@user>*']
handler.tags = ['fun']
handler.command = ['dance', 'bailar']
export default handler
