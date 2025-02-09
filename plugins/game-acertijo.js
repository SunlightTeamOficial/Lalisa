import fs from 'fs'

let cooldown = 60000 
let poin = 450

let handler = async (m, { conn, usedPrefix }) => {
let now = new Date()
let lastUsage = global.db.data.users[m.sender].lastAcet || 0
if (now - lastUsage < cooldown) {
let remainingTime = cooldown - (now - lastUsage)
return conn.reply(m.chat,`> *_❒ Espera ${msToTime(remainingTime)} Antes De Volver Usar El Comando_*`, m, rcanal)
}
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '> *_❒ Todavía Hay Acertijos Sin Responder_*', conn.tekateki[id][0])
return null
}
let tekateki = JSON.parse(fs.readFileSync(`./plugins/_acertijo.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `${json.question}
> *_❒ Tiempo : ${(cooldown / 1000).toFixed(2)} Segundos_*
> *_❒ Bono : +${poin} Exp_*
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, poin,
setTimeout(async () => {
if (conn.tekateki[id]) {
await conn.reply(m.chat, `> *_❒ Se Acabó El Tiempo!\n> *_❒ Respuesta : ${json.response}_*`, conn.tekateki[id][0])
delete conn.tekateki[id]
}
}, cooldown)
]
global.db.data.users[m.sender].lastAcet = now
}
handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|acert|pregunta|adivinanza|tekateki)$/i
export default handler

function msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60)

    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " Minuto(s) " + seconds + " Segundo(s)"
}
