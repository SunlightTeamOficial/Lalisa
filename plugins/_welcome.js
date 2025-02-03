import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn }) {
  if (!m.messageStubType || !m.isGroup) return

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/p0JpJ6G/file.jpg')
  let img = await (await fetch(pp)).buffer()

  let mensajes = {
    27: `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Welcome User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*\n\n╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱\n┊•*⁀➷ °⭒⭒⭒\n│ ‹‹ *Welcome* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*\n╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`,

    28: `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*\n\n╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱\n┊•*⁀➷ °⭒⭒⭒\n│ ‹‹ *Bye* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*\n╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`,

    32: `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*\n\n╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱\n┊•*⁀➷ °⭒⭒⭒\n│ ‹‹ *Kicked* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*\n╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`
  }

  if ([27, 28, 32].includes(m.messageStubType)) {
    await conn.sendMessage(m.chat, { 
      image: img, 
      caption: mensajes[m.messageStubType], 
      contextInfo: {
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          showAdAttribution: true,
          title: "📢 Ver canal",
          body: "Únete al canal oficial",
          previewType: 0,
          thumbnail: img, // Usa la misma imagen de perfil
          sourceUrl: "https://chat.whatsapp.com/tu-enlace-del-canal"
        }
      }
    }, { quoted: null })
  }
}
