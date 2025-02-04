import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/7tYbhL18/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `𝚂𝚞𝚗𝚕𝚒𝚐𝚑𝚝 𝚃𝚎𝚊𝚖 𝙾𝚏𝚒𝚌𝚒𝚊𝚕

${global.canal}`

await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['canal']
handler.tags = ['main']
handler.command = /^(canal)$/i
export default handler 
