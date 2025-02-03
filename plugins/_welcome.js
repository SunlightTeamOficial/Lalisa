import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/N9mxbKF/file.jpg');
  let img = await (await fetch(`${pp}`)).buffer();
  let chat = global.db.data.chats[m.chat];

  const audioUrl = 'https://files.catbox.moe/gze3ub.mp3';

  if (chat.bienvenida && m.messageStubType == 27) {
    if (chat.sWelcome) {
      let user = `@${m.messageStubParameters[0].split`@`[0]}`;
      let welcome = chat.sWelcome
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
      await conn.sendAi(m.chat, botname, textbot, welcome, img, img, canal);
    } else {
      let bienvenida = `┌─✦ 𝑻𝒆𝒄𝒏𝒐-𝑩𝒐𝒕 \n│「 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 」\n└┬✎ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✎  𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 𝑨\n   │✎  ${groupMetadata.subject}\n   └───────────────┈ ⳹\n> 𝒖𝒏𝒆𝒕𝒆 𝒂𝒎𝒊 𝒄𝒂𝒏𝒂𝒍 https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m`;
      await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img);
    }
    // Enviar el audio después del mensaje de bienvenida
    await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    if (chat.sBye) {
      let user = `@${m.messageStubParameters[0].split`@`[0]}`;
      let bye = chat.sBye
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
      await conn.sendAi(m.chat, botname, textbot, bye, img, img);
    } else {
      let bye = `┌─✦ 𝑻𝒆𝒄𝒏𝒐-𝑩𝒐𝒕  \n│「 BAYY 👋 」\n└┬✎ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✎  Largate\n   │✎ Jamás te quisimos aquí\n   └───────────────┈ ⳹`;
      await conn.sendAi(m.chat, botname, textbot, bye, img, img);
    }
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    if (chat.sBye) {
      let user = `@${m.messageStubParameters[0].split`@`[0]}`;
      let bye = chat.sBye
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
      await conn.sendAi(m.chat, botname, textbot, bye, img, img);
    } else {
      let kick = `┌─✦ 𝑻𝒆𝒄𝒏𝒐-𝑩𝒐𝒕  \n│「 BAYY 👋 」\n└┬✎ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✎  Largate\n   │✎ Jamás te quisimos aquí\n   └───────────────┈ ⳹`;
      await conn.sendAi(m.chat, botname, textbot, kick, img, img);
    }
  }
}
