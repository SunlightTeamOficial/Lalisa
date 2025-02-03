import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/sJk7RCBc/file.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Welcome User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*

╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Welcome* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`

await conn.sendAi(m.chat, botname, textbot, bienvenida, img, m, null, rcanal)
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*
    
╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Bye* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`
await conn.sendAi(m.chat, botname, textbot, bye, img, m, null, rcanal)
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `*꒰︵፝֟⏜ᩨ︵ᡴꪫ Goodbye User ꒰︵ᩨ⏜︵፝֟𑁯ᰍ*
    
╭──ׅ─| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱
┊•*⁀➷ °⭒⭒⭒
│ ‹‹ *Bye* :: *@${m.messageStubParameters[0].split`@`[0]}⁨*
╰───| ͜͡  ͜͡ᩙ‎ | ͜͡  ͜͡ᩙ‎ | ͜͡ ꒱`
await conn.sendAi(m.chat, botname, textbot, kick, img, m, null, rcanal)
}}
