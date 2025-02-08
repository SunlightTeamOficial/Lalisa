import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat,`> *_❒ Ingresa El Link De Tiktok_*`, m, rcanal)
    
try {
let api = await axios.get(`https://restapi.apibotwa.biz.id/api/tiktok?url=${args[0]}`)
let json = api.data
let { title, cover, origin_cover, no_watermark, watermark, music } = json.data.response
    

await conn.sendFile(m.chat, no_watermark, 'Tiktok.mp4', title, m, null, rcanal)
await conn.sendFile(m.chat, music, 'Tiktok.mp3', m, null, rcanal)
} catch (error) {
console.error(error)    
}}
handler.help = ['tiktok *<url tt>*']
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktokdl', 'ttdl', 'tt']

export default handler
