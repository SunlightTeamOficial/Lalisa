import { createHash } from 'crypto';
import fs from 'fs';
import fetch from 'node-fetch';
const { generateWAMessageContent, generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default;

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender];
  let name2 = conn.getName(m.sender);

  if (user.registered === true)
    return m.reply(`❀ Ya estás registrado.\n\nUsa este comando para eliminar tu registro:\n*${usedPrefix}unreg* <Número de serie>`);

  if (!Reg.test(text))
    return m.reply(`❀ Formato incorrecto.\n\nUso del comando: *${usedPrefix + command} nombre.edad*\nEjemplo: *${usedPrefix + command} ${name2}.16*`);

  let [_, name, splitter, age] = text.match(Reg);
  if (!name) return m.reply('❀ El nombre no puede estar vacío.');
  if (!age) return m.reply('❀ La edad no puede estar vacía.*');
  if (name.length >= 100) return m.reply('❀ El nombre es demasiado largo.');

  age = parseInt(age);
  if (age > 100) return m.reply('❀ Wow, un abuelo jsjsj.');
  if (age < 5) return m.reply('❀ Hay un abuelo bebé jsjsj.*');

  user.name = name.trim();
  user.age = age;
  user.regTime = +new Date;
  user.registered = true;

  let sn = createHash('md5').update(m.sender).digest('hex');
  let img = await (await fetch(`https://i.ibb.co/p0JpJ6G/file.jpg`)).buffer();
  let txt = `┌  ✩  *Nombre* : ${name}\n`
      txt += `│  ✩  *Edad* : ${age} años\n`
      txt += `│  ✩  *Numero de serie*\n`
      txt += `└  ✩  ${sn}`

  await conn.sendMessage(m.chat, { text: txt, image: img }, { quoted: m });
  await m.react('✅');
}

handler.help = ['reg'].map(v => v + ' *<nombre.edad>*');
handler.tags = ['rg'];
handler.command = ['verify', 'reg', 'register', 'registrar'];

export default handler;
