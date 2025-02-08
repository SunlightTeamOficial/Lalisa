import axios from 'axios';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat,`> *_❒ Ingresa El Link De Terabox_*`, m, rcanal)
await m.react('🕓')
  try {
    const result = await terabox(text);
    if (!result.length) return conn.reply(m.chat,`> *_❒ Ingresa El Link De Terabox_*`, m, rcanal)

    for (let i = 0; i < result.length; i++) {
      const { fileName, type, thumb, url } = result[i];
      const caption = `> *_❀ » Nombre File : ${fileName}_*\n> *_❀ » Formato : ${type}_*`;

      await m.react('✅')      
      await conn.sendFile(m.chat, url, fileName, caption, m, false, {
        thumbnail: thumb ? await getBuffer(thumb) : null
      });
    }
  } catch (err) {
    console.error(err);
    m.reply('error al descargar el archivo.');
  }
};
handler.help = ["terabox *<url>*"];
handler.tags = ["downloader"];
handler.command = ["terabox"];

export default handler;

async function terabox(url) {
  return new Promise(async (resolve, reject) => {
    await axios
      .post('https://teradl-api.dapuntaratya.com/generate_file', {
        mode: 1,
        url: url
      })
      .then(async (a) => {
        const array = [];
        for (let x of a.data.list) {
          let dl = await axios
            .post('https://teradl-api.dapuntaratya.com/generate_link', {
              js_token: a.data.js_token,
              cookie: a.data.cookie,
              sign: a.data.sign,
              timestamp: a.data.timestamp,
              shareid: a.data.shareid,
              uk: a.data.uk,
              fs_id: x.fs_id
            })
            .then((i) => i.data)
            .catch((e) => e.response);

          if (!dl.download_link) continue;

          array.push({
            fileName: x.name,
            type: x.type,
            thumb: x.image,
            url: dl.download_link.url_1
          });
        }
        resolve(array);
      })
      .catch((e) => reject(e.response.data));
  });
}


async function getBuffer(url) {
  try {
    const res = await axios({
      method: 'get',
      url,
      responseType: 'arraybuffer'
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
