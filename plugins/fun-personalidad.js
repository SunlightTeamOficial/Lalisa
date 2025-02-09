let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat,`> *_❒ Ingresa Tu Nombre_*`, m, rcanal)
	
  let personalidad = `
> *_❀ » Nombre : ${text}_*
> *_❀ » Buena Moral : ${pickRandom(['6%_*','12%_*','20%_*','27%_*','35%_*','41%_*','49%_*','54%_*','60%_*','66%_*','73%_*','78%_*','84%_*','92%_*','93%_*','94%_*','96%_*','98,3%_*','99,7%_*','99,9%_*','1%_*','2,9%_*','0%_*','0,4%_*'])}
> *_❀ » Tipo de persona : ${pickRandom(['De Buen Corazón_*','Arrogante_*','Tacaño_*','Generoso_*','Humilde_*','Tímido_*','Cobarde_*','Entrometido_*','Cristal_*', 'Pendejo_*'])}
> *_❀ » Siempre : ${pickRandom(['Pesado_*','De Malas_*','Distraido_*','De Molestoso_*','Chismoso_*','De Compras_*','Viendo LaLisa_*','Chatea En WhatsApp_*','Acostado_*','De Mujer_*','En El Celular_*'])}
> *_❀ » Inteligencia : ${pickRandom(['6%_*','12%_*','20%_*','27%_*','35%_*','41%_*','49%_*','54%_*','60%_*','66%_*','73%_*','78%_*','84%_*','92%_*','93%_*','94%_*','96%_*','98,3%_*','99,7%_*','99,9%_*','1%_*','2,9%_*','0%_*','0,4%_*'])}
> *_❀ » Coraje : ${pickRandom(['6%_*','12%_*','20%_*','27%_*','35%_*','41%_*','49%_*','54%_*','60%_*','66%_*','73%_*','78%_*','84%_*','92%_*','93%_*','94%_*','96%_*','98,3%_*','99,7%_*','99,9%_*','1%_*','2,9%_*','0%_*','0,4_*%'])}
> *_❀ » Miedo : ${pickRandom(['6%_*','12%_*','20%_*','27%_*','35%_*','41%_*','49%_*','54%_*','60%_*','66%_*','73%_*','78%_*','84%_*','92%_*','93%_*','94%_*','96%_*','98,3%_*','99,7%_*','99,9%_*','1%_*','2,9%_*','0%_*','0,4%_*'])}
> *_❀ » Fama : ${pickRandom(['6%_*','12%_*','20%_*','27%_*','35%_*','41%_*','49%_*','54%_*','60%_*','66%_*','73%_*','78%_*','84%_*','92%_*','93%_*','94%_*','96%_*','98,3%_*','99,7%_*','99,9%_*','1%_*','2,9%_*','0%_*','0,4%_*'])}
> *_❀ » Género : ${pickRandom(['Hombre_*', 'Mujer_*', 'Homosexual_*', 'Bisexual_*', 'Pansexual_*', 'Feminista_*', 'Heterosexual_*', 'Macho_*', 'Mujerzona_*', 'Marimacha_*', 'Palosexual_*', 'PlayStationSexual_*', 'Manuela_*', 'Pollosexual_*'])}
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personalidad *<nombre>*']
handler.tags = ['fun']
handler.command = /^personalidad/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
