import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let pp = await conn.profilePictureUrl(m.sender, 'image')

    const anu = {
      "key": {
        "fromMe": false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
      },
      "message": {
        "groupInviteMessage": {
          "groupJid": "6285240750713-1610340626@g.us",
          "inviteCode": "mememteeeekkeke",
          "groupName": "P",
          "caption": "Hello, I'm LaLisa",
          "jpegThumbnail": await (await fetch(pp)).buffer()
        }
      }
    }
    
    conn.sendMessage(m.chat, { text: '> *_❒ Hola ¿Cómo Puedo Ayudarte?_*' }, { quoted: anu })
  } catch (error) {
    conn.sendMessage(m.chat, '> *_❒ Hola ¿Cómo Puedo Ayudarte?_*', 'conversation', { quoted: m })
  }
}

handler.customPrefix = /^(Ai)$/i
handler.command = new RegExp
export default handler
