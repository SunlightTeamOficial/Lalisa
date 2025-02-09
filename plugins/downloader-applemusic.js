import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `> *_❒ Ingresa El Link De Applemusic_*`, m, rcanal)

try {

await m.react('🕒')
let api = await axios.get(`https://restapi.apibotwa.biz.id/api/appledl?url=${args[0]}`)
let json = api.data
let { name, albumname, artist, thumb, duration, url, download } = json.result

    await conn.sendMessage(m.chat, {
      audio: {
        url: download
      },
      mimetype: 'audio/mpeg',
      contextInfo: {
        externalAdReply: {
          title: name,
          body: artist,
          mediaType: 1,
          mediaUrl: url,
          thumbnailUrl: thumb,
          sourceUrl: url,
          containsAutoReply: true,
          renderLargerThumbnail: true,
          showAdAttribution: false,
        }
      }
    }, { quoted: m });
    await m.react('✅')

} catch (error) {
console.error(error)    
await m.react('✖️')
}}    

handler.help = ['applemusic *<url>*'];
handler.tags = ['downloader'];
handler.command = ['appledl', 'applemusic']

export default handler
