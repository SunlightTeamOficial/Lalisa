import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn }) {
  if (!m.messageStubType || !m.isGroup) return

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/sJk7RCBc/file.jpg')
  let img = await (await fetch(pp)).buffer()

   if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Welcome User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*

╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Welcome* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`

  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*
    
╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Bye* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`

  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*
    
╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Bye* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`
  }

  if ([27, 28, 32].includes(m.messageStubType)) {
    await conn.sendMessage(m.chat, { image: img, caption: mensajes[m.messageStubType] }, { quoted: null })
  }
}
