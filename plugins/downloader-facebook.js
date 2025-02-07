import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `> *_❒ Ingresa El Link De Facebook_*`, m, rcanal)

try {
let api = await axios.get(`https://restapi.apibotwa.biz.id/api/fbdl?url=${args[0]}`)
let json = api.data
let { duration, result } = json.data
    
let videoUrl = result.find(video => video.quality === "720p (HD)") 
             ? result.find(video => video.quality === "720p (HD)").url 
             : result.find(video => video.quality === "360p (SD)").url

   
await conn.sendFile(m.chat, videoUrl, 'Facebook.mp4', `Duración: ${duration}`, m)
} catch (error) {
console.error(error)    
}}    

handler.help = ["facebook *<url>*"];
handler.tags = ["downloader"];
handler.command = ['facebookdl', 'facebook', 'fb']

export default handler
