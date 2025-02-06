import fetch from 'node-fetch';

const videoLimit = 40 * 1024 * 1024; // 40MB
const docLimit = 10 * 1024 * 1024; // 10MB

let handler = async (m, { conn, text }) => {
  if (!m.quoted) {
    return conn.reply(m.chat, `❀ Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m);
  }

  if (!m.quoted.text.includes("𝚈𝙾𝚄𝚃𝚄𝙱𝙴 - 𝙿𝙻𝙰𝚈")) {
    return conn.reply(m.chat, `❀ Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m);
  }

  const urls = m.quoted.text.match(
    /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/gi
  );

  if (!urls || urls.length === 0) {
    return conn.reply(m.chat, 'Resultado no Encontrado.', m);
  }

  const videoUrl = urls[0];
  await m.react('🕓');

  let downloadData = await tryApiFetch(videoUrl);

  if (!downloadData) {
    return conn.reply(m.chat, 'Resultado no Encontrado.', m);
  }

  await handleVideoDownload(conn, m, downloadData);
};

const tryApiFetch = async (videoUrl) => {
  const apiUrls = [
    `https://api.siputzx.my.id/api/d/ytmp4?url=${encodeURIComponent(videoUrl)}`, 
    `https://mahiru-shiina.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
  ];

  for (const apiUrl of apiUrls) {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();

      if (result.status) {
        if (result.data.dl) { 
          return {
            title: result.data.title || "Desconocido",
            downloadUrl: result.data.dl, 
          };
        }
        if (result.data.download) { 
          return {
            title: result.data.title || "Desconocido",
            downloadUrl: result.data.download,
          };
        }
      }
    } catch (error) {
      console.error(`Error al intentar con la API: ${apiUrl}`, error.message);
    }
  }

  return null;
};

const handleVideoDownload = async (conn, m, data) => {
  const title = data.title || "Desconocido";
  const downloadUrl = data.downloadUrl;

  try {
    const fileResponse = await fetch(downloadUrl);
    const fileBuffer = await fileResponse.buffer();
    const fileSize = fileBuffer.length;

    if (fileSize > docLimit) {
      await conn.sendMessage(
        m.chat,
        {
          document: fileBuffer,
          mimetype: 'video/mp4',
          fileName: `${title}.mp4`,
        },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: downloadUrl },
          fileName: `${title}.mp4`,
          mimetype: 'video/mp4',
          caption: `❀ » Título : ${title}\n ❀ » Duración : Desconocida`,
        },
        { quoted: m }
      );
    }

    await m.react('✅');
  } catch (error) {
    console.error('Error al manejar el video:', error);
    await conn.reply(m.chat, 'Error al descargar o procesar el video.', m);
    await m.react('✖️');
  }
};

handler.help = ['video'];
handler.tags = ['downloader'];
handler.customPrefix = /^(VIDEO|Video|video|vídeo|Vídeo)/;
handler.register = true;
handler.Monedas = 5;
handler.command = new RegExp;

export default handler;
