import fetch from 'node-fetch'

let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `> *_❒ Ingresa El Link Del Repositorio_*`, m, rcanal)
  }
  if (!regex.test(args[0])) {
    return conn.reply(m.chat, `Verifica que la *URL* sea de GitHub`, m).then(_ => m.react('✖️'))
  }
  let [_, user, repo] = args[0].match(regex) || []
  let sanitizedRepo = repo.replace(/.git$/, '')
  let repoUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}`
  let zipUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}/zipball`
  await m.react('🕓')
  try {
    let [repoResponse, zipResponse] = await Promise.all([
      fetch(repoUrl),
      fetch(zipUrl),
    ])
    let repoData = await repoResponse.json()
    let filename = zipResponse.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    let type = zipResponse.headers.get('content-type')
    let img = 'https://i.ibb.co/mVn628N0/file.jpg'
    let txt = `> *_❀ » Nombre : ${filename}_*\n`
       txt += `> *_❀ » Repositorio : ${user}/${sanitizedRepo}_*\n`
       txt += `> *_❀ » Creador : ${repoData.owner.login}_*\n`
       txt += `> *_❀ » Descripción : ${repoData.description || 'Sin descripción disponible'}_*\n`
       txt += `> *_❀ » Url : ${args[0]}_*\n\n`

await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await conn.sendFile(m.chat, await zipResponse.buffer(), filename, null, m)
await m.react('✅')
  } catch {
await m.react('✖️')
  }
}
handler.help = ['gitclone *<url git>*']
handler.tags = ['downloader']
handler.command = /^(gitclone)$/i
handler.register = true 
//handler.star = 1
export default handler
