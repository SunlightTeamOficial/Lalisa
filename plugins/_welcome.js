import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/jYQH.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `27:  *꒰︵፝֟⏜ᩨ︵ᡴꪫ Welcome User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*\n\n╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱\n┊•*⁀➷ °⭒⭒⭒\n│ ‹‹ *Welcome* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*\n╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`,

await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `28: *꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*\n\n╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱\n┊•*⁀➷ °⭒⭒⭒\n│ ‹‹ *Bye* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*\n╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`,
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `32: *꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*\n\n╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱\n┊•*⁀➷ °⭒⭒⭒\n│ ‹‹ *Kicked* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*\n╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`
  
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
