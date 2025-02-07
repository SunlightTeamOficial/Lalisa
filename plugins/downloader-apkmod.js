let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!args[0]) return conn.reply(m.chat, `> *_❒ Ingresa El Nombre De La App_*`, m, rcanal)
let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${args[0]}`);
let result = await res.json();
let { name, size, lastUpdate, icon } = result;
let URL = result.dllink
let packe = result.package
let texto = `> ❀ » Nombre : ${name}
> *_❀ » Tamaño : ${size}_*
> *_❀ » Package : ${packe}_*
> *_❀ » Actualizado : ${lastUpdate}_*`
await conn.sendFile(m.chat, icon, name + '.jpg', texto, m, null, rcanal)

await conn.sendMessage(m.chat, { document: { url: URL }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: ''}, { quoted: m });
}
handler.tags = ['downloader']
handler.help = ['apkmod']
handler.command = /^(apkmod|apk|dapk2|aptoide|aptoidedl)$/i
handler.register = true
handler.zenis = 10

export default handler
