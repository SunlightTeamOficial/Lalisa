import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/vxS8bXR0/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `Canal Oficial

*🪷* ${global.canal}

> [ ✰ ] ${global.textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['canal']
handler.tags = ['main']
handler.command = /^(canal)$/i
export default handler 
