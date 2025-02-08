import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text || !text.startsWith('http')) {
    return conn.reply(m.chat, '> *_❒ Ingresa El Link De Spotify_*', m,rcanal);
  }

  await m.react('🕓');

  try {
    let apiURL = `https://delirius-apiofc.vercel.app/download/spotifydlv3?url=${encodeURIComponent(text)}`;
    let apiDL = await fetch(apiURL);
    let jsonDL = await apiDL.json();

    if (jsonDL && jsonDL.status && jsonDL.data) {
      let { title, author, image, duration, url: musicUrl } = jsonDL.data;

      let durationMinutes = Math.floor(duration / 60000);
      let durationSeconds = ((duration % 60000) / 1000).toFixed(0);

      let caption = `> *_❀ » Título : ${title}_*\n> *_❀ » Autor : ${author}_*\n> *_❀ » Duración : ${durationMinutes}:${durationSeconds.padStart(2, '0')}_*\n> *_❀ » Enlace : ${text}_*`;

      await conn.sendFile(m.chat, image, 'cover.jpg', caption, m,rcanal,fake);

      await conn.sendMessage(m.chat, {
        audio: { url: musicUrl },
        mimetype: 'audio/mp4'
      }, { quoted: m });

      await m.react('✅');
    } else {
      await m.react('✖');
    }
  } catch (error) {
    console.error(error);
    await m.react('✖');
  }
};

handler.tags = ['downloader']
handler.help = ['spotify *<url>*']
handler.command = ['spotify']
//handler.limit = 1
handler.register = true
export default handler
