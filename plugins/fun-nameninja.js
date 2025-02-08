function handler(m, { text }) {
if (!text) return conn.reply(m.chat,`> *_❒ Ingresa Tu Nombre_*`, m, rcanal)
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-z]/gi, v => {
        return {
            'a': '> *_❒ ka',
            'b': 'tsu',
            'c': 'mi',
            'd': 'te',
            'e': 'ku',
            'f': 'hi',
            'g': 'ji',
            'h': 'ri',
            'i': 'ki',
            'j': 'zu',
            'k': 'me',
            'l': 'ta',
            'm': 'rin',
            'n': 'to',
            'o': 'mo',
            'p': 'no',
            'q': 'ke',
            'r': 'shi',
            's': 'ari',
            't': 'chi',
            'u': 'do',
            'v': 'ru',
            'w': 'mei',
            'x': 'na',
            'y': 'fu',
            'z': 'mori'
        }[v.toLowerCase()] || v
    }))
}
handler.help = ['nombreninja *<texto>*']
handler.tags = ['fun']
handler.command = ['nombreninja']
handler.register = true

export default handler
