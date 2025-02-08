let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command);
  let chat = global.db.data.chats[m.chat];
  let user = global.db.data.users[m.sender];
  let bot = global.db.data.settings[conn.user.jid] || {};
  let type = (args[0] || '').toLowerCase();
  let isAll = false, isUser = false;

  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.bienvenida = isEnable;
      break;

case 'despedida':
    case 'bv':
    case 'despedida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.despedida = isEnable;
      break;

    case 'autoread':
    case 'autoleer':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['autoread'] = isEnable;
      break;

   case 'jadibot': 
   case 'modojadibot': 
   case 'serbot': 
   case 'modoserbot': 
     isAll = true
     if (!isROwner) {
       global.dfail('rowner', m, conn)
       throw false
     }
     bot.jadibotmd = isEnable
     break;

    case 'document':
    case 'documento':
      isUser = true;
      user.useDocument = isEnable;
      break;

    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;

    case 'nsfw':
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.nsfw = isEnable;
      break;

    case 'antiarabes':
    case 'antinegros':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.onlyLatinos = isEnable;
      break;

    case 'modoadmin':
    case 'soloadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;

    default:
      if (!/[01]/.test(command)) return m.reply(`
> *_❀ » Tipo : Welcome_*
> *_❀ » Descripción : Des/Activa La Bienvenida Para Grupos_*

> *_❀ » Tipo : Despedida_*
> *_❀ » Descripción : Des/Activa La Despedida Para Grupos_*

> *_❀ » Tipo : Nsfw_*
> *_❀ » Descripción : Des/Activa Los Comandos Nsfw Para Grupos_*

> *_❀ » Tipo : Antiarabes_*
> *_❀ » Descripción : Des/Activa El AntiArabes Para Grupos_*

> *_❀ » Tipo : antilink_*
> *_❀ » Descripción : Des/Activa El AntiLink Para Grupos_*

> *_❀ » Tipo : Autoread_*
> *_❀ » Descripción : Des/Activa El AutoRead Para La Bot_*

> *_❀ » Tipo : document_*
> *_❀ » Descripción : Des/Activa La Descarga En Documentos Para El Usuario_*

> *_❀ » Tipo : Modoadmin_*
> *_❀ » Descripción : Des/Activa El Modo Solo Administradores Para Grupos_*

> *_❀ » Tipo : Jadibot_*
> *_❀ » Descripción : Des/Activa El Jadibot Para LA Bot_*

> *_❀ » Ejemplo De Uso_*
> *_❀ » ${usedPrefix + command} welcome_*
`.trim());
      throw false;
  }

  m.reply(`La función *${type}* se *${isEnable ? 'activó' : 'desactivó'}* ${isAll ? 'para este bot' : isUser ? '' : 'para este chat'}`);
};

handler.help = ['enable', 'disable'];
handler.tags = ['nable'];
handler.command = /^(enable|disable|on|off|1|0)$/i;

export default handler;
