import fetch from "node-fetch"

let handler = async (m, { text, conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        await m.react('✖️')
        return m.reply("🚩 Ingresa el enlace de Cocofun junto al comando.")
    }
    
    try {
        await m.react('🕒') 
        let api = await fetch(`https://api.agatz.xyz/api/cocofundl?url=${args[0]}`)
        let json = await api.json()
        let { title, description, image, video, topic, caption, play, like, share, duration, thumbnail, watermark, no_watermark } = json.data
        let txt = `✩ *Title* : ${title}
✩ *Descripcion* : ${description}
✩ *Visitas* : ${play}
✩ *Likes* : ${like}
✩ *Duracion* : ${duration}
`
        await conn.sendFile(m.chat, image, 'image.jpg', txt, m)
        await conn.sendFile(m.chat, no_watermark, 'video.mp4', txt, m)
        await m.react('✅')
    } catch (error) {
        console.error(error)
        await m.react('✖')
    }
}

handler.help = ['cocofundl *<url>*'];
handler.tags = ['dl'];
handler.command = ['cocofundl']

export default handler