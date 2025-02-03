import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn }) {
  if (!m.messageStubType || !m.isGroup) return

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/p0JpJ6G/file.jpg')
  let img = await (await fetch(pp)).buffer()

  let mensajes = {
    27: `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Welcome User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*
    
╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Welcome* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`,

    28: `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*
    
╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Bye* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`,

    32: `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*
    
╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Kicked* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`
  }

  if ([27, 28, 32].includes(m.messageStubType)) {
    await conn.sendMessage(m.chat, { image: img, canal caption: mensajes[m.messageStubType] }, { quoted: null })
  }
}
