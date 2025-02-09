import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
if (!text) return conn.reply(m.chat,`> *_❒ Ingresa Un Nombre_*`, m, rcanal)
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['🤓','😅','😂','😳','😎', '🥵', '😱', '🤑', '🙄', '💩','🍑','🤨','🥴','🔥','👇🏻','😔', '👀','🌚'])}`
let l = Math.floor(Math.random() * x.length);
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `> *_❀ » Top 10 ${text}_*
    
> *_❀ » 1 : ${user(a)}_*
> *_❀ » 2 : ${user(b)}_*
> *_❀ » 3 : ${user(c)}_*
> *_❀ » 4 : ${user(d)}_*
> *_❀ » 5 : ${user(e)}_*
> *_❀ » 6 : ${user(f)}_*
> *_❀ » 7 : ${user(g)}_*
> *_❀ » 8 : ${user(h)}_*
> *_❀ » 9 : ${user(i)}_*
> *_❀ » 10 : ${user(j)}_*`, m, rcanal)
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
}
handler.help = handler.command = ['top']
handler.tags = ['fun']
handler.group = true
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
