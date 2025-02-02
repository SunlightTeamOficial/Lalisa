import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://i.ibb.co/gLN5wzF5/file.jpg`)).buffer()

  const canales = [
    {
      id: "120363387644070749@newsletter",
      nombre: "Sunlight Team Oficial",
    },
    {
      id: "120363229122990393@newsletter",
      nombre: "Patocinador Cuervo-Team-Supreme",
    },
  ]

  const canalSeleccionado = canales[Math.floor(Math.random() * canales.length)]

  global.rcanal = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: canalSeleccionado.id,
        serverMessageId: 100,
        newsletterName: canalSeleccionado.nombre,
      },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}