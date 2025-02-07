import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat,`> *_❒ Ingresa El Link De Instagram_*`, m, rcanal)
    
try {
let api = await axios.get(`https://restapi.apibotwa.biz.id/api/igdl?url=${args[0]}`)
let json = api.data
    
let media = json.data
let titulo = media.metadata.caption || ''
let likes = media.metadata.like || ''
let comentarios = media.metadata.comment || ''
let mediaUrl = media.url

    
let HS = `> *_❀ » Duración: ${duration}_*`
      
if (media.metadata.isVideo) {
await conn.sendFile(m.chat, mediaUrl[0], 'instagram.mp4', HS, m)
} else {
for (let url of mediaUrl) {
await conn.sendFile(m.chat, url, 'instagram.jpg', HS, m)
}}    
} catch (error) {
console.error(error)    
}}

handler.help = ['instagram *<link ig>*']
handler.tags = ['downloader']
handler.command = ['instagram', 'igdl', 'ig']
handler.register = true

export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else if (number <= -1000 && number > -1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number <= -1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()
}}
