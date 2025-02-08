let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iqtest)$/i
handler.register = true


handler.fail = null

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'> *_❒ Tu IQ Es De : 1_*',
'> *_❒ Tu IQ Es De : 14_*',
'> *_❒ Tu IQ Es De : 23_*',
'> *_❒ Tu IQ Es De : 35_*',
'> *_❒ Tu IQ Es De : 41_*',
'> *_❒ Tu IQ Es De : 50_*',
'> *_❒ Tu IQ Es De : 67_*',
'> *_❒ Tu IQ Es De : 72_*',
'> *_❒ Tu IQ Es De : 86_*',
'> *_❒ Tu IQ Es De : 99_*',
'> *_❒ Tu IQ Es De : 150_*',
'> *_❒ Tu IQ Es De : 340_*',
'> *_❒ Tu IQ Rs De : 423_*',
'> *_❒ Tu IQ Es De : 500_*',
'> *_❒ Tu IQ Es De : 676_*',
'> *_❒ Tu IQ Es De : 780_*',
'> *_❒ Tu IQ Es De : 812_*',
'> *_❒ Tu IQ Es De : 945_*',
'> *_❒ Tu IQ Es De : 1000_*',
'> *_❒ Tu IQ Es De : Ilimitado!!_*',
'> *_❒ Tu IQ Es De : 5000_*',
'> *_❒ Tu IQ Es De : 7500_*',
'> *_❒ Tu IQ Es De : 10000_*',
]
