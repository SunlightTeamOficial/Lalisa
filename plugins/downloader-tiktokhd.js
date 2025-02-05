import axios from "axios";
import FormData from "form-data";
import cheerio from "cheerio";

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!text) return conn.reply(m.chat, `❀ Ingresa un enlace del vídeo de TikTok junto al comando.`, m, rcanal)
    try {
let data = await tiktokdl(text)
console.log(data)
  let start = Date.now();
  let sp = (Date.now() - start) + 'ms'
  let cap = `*\`❀  𝙲𝙰𝙻𝙸𝙳𝙰𝙳 - 𝙽𝙾𝚁𝙼𝙰𝙻\`*`
  let capp = `*\`❀  𝙲𝙰𝙻𝙸𝙳𝙰𝙳 - 𝙷𝙳\`*`
  await m.react('🕓');
  await conn.sendMessage(m.chat, {
                    video: {
                        url: data.server1.url
                    },
                    caption: cap
                }, {
                    quoted: m
                })
await conn.sendMessage(m.chat, {
                    video: {
                        url: data.serverHD.url
                    },
                    caption: capp
                }, {
                    quoted: m
                })
await m.react('✅')
  } catch {
    await m.react('✖️')
  }
}
handler.help = ['tiktokhd *<url>*']
handler.tags = ['downloader']
handler.command = /^(tiktokhd)$/i;

export default handler

async function tiktokdl(url) {
    let result = {};
    let form = new FormData();
    form.append("q", url);
    form.append("lang", "id");

    try {
        let { data } = await axios("https://savetik.co/api/ajaxSearch", {
            method: "post",
            data: form,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "User-Agent": "PostmanRuntime/7.32.2"
            }
        });

        let $ = cheerio.load(data.data);

        result.status = true;
        result.caption = $("div.video-data > div > .tik-left > div > .content > div > h3").text();
        result.server1 = {
            quality: "MEDIUM",
            url: $("div.video-data > div > .tik-right > div > p:nth-child(1) > a").attr("href")
        };
        result.serverHD = {
            quality: $("div.video-data > div > .tik-right > div > p:nth-child(3) > a").text().split("MP4 ")[1],
            url: $("div.video-data > div > .tik-right > div > p:nth-child(3) > a").attr("href")
        };
        result.audio = $("div.video-data > div > .tik-right > div > p:nth-child(4) > a").attr("href");

    } catch (error) {
        result.status = false;
        result.message = error;
        console.log(result);
    }

    return result;
}
