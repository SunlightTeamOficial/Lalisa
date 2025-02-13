import ws from 'ws';
async function handler(m, { usedPrefix }) {

const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
function dhms(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + 'd '
  }
  if (horas !== 0) {
    resultado += horas + 'h '
  }
  if (minutos !== 0) {
    resultado += minutos + 'm '
  }
  if (segundos !== 0) {
    resultado += segundos + 's'
  }

  return resultado;
}

  const message = users.map((v, index) => `*\`Subbot: ${index + 1}\`* \n*\`✅ Tag:\` @${v.user.jid.replace(/[^0-9]/g, '')}*\n*• wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}menu*\n*\`📝 Nombre: ${v.user.name || '-'}\`*\n*\`⏲️ Uptime: ${v.uptime ? dhms(Date.now() - v.uptime) : "Desconocido"}\`*`).join('\n\n*─ ── ──  ── ── ── ── ──  ── ── ─*\n\n');
  const replyMessage = message.length === 0 ? 'No hay' : message;
  const totalUsers = users.length;
  const responseMessage = `
*\`📝 Subbots activos: ${totalUsers || '0'}\`*

 ${replyMessage.trim()}
 
 
_*\`Developed by LaLisa~\`*_`.trim();

  await conn.sendMessage(m.chat, { text: responseMessage, mentions: conn.parseMention(responseMessage)}, {quoted: m});
}
handler.help = ['botlist']
handler.tags = ['bebot']
handler.command = ['listbot', 'listbots', 'bots', 'bebots', 'botlist'] 


export default handler