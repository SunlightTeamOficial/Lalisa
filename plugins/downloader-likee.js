import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '❀ Ingrese la url de un video de *Likee* junto al comando.', m, rcanal)
await m.react('🕓')
try {
let app = await fetch(`https://apis-starlights-team.koyeb.app/starlight/like-downloader?url=${text}`, { headers: { 'Content-Type': 'application/json' }})
let json = await app.json()
let video = json.links['no watermark']
await conn.sendFile(m.chat, video, 'samu.mp4', `${json.caption}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['likeedl *<url>*']
handler.tags = ['downloader']
handler.command = /^(likeedl)$/i
handler.register = true
export default handler
