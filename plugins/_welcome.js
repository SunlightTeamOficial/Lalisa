import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/sJk7RCBc/file.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `Bienvenido/a *@${m.messageStubParameters[0].split`@`[0]}* al grupo.`
    await conn.sendAi(m.chat, botname, bienvenida, img, img, canal)
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `*@${m.messageStubParameters[0].split`@`[0]}* ha salido del grupo.`
    await conn.sendAi(m.chat, botname, bye, img, img, canal)
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `*@${m.messageStubParameters[0].split`@`[0]}* ha sido eliminado del grupo.`
    await conn.sendAi(m.chat, botname, kick, img, img, canal)
  }
}
