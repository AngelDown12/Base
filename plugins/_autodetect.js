let WAMessageStubType = (await import(global.baileys)).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

export async function before(m, { conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return
  let usuario = `@${m.sender.split`@`[0]}`
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let chat = global.db.data.chats[m.chat]
  let users = participants.map(u => conn.decodeJid(u.id))
  const groupAdmins = participants.filter(p => p.admin)
  const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')

  if (chat.detect && m.messageStubType == 2) {
    // Activación de la eliminación de sesiones de PreKey
    const chatId = m.isGroup ? m.chat : m.sender;
    const uniqid = chatId.split('@')[0];
    const sessionPath = './session/';
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file.includes(uniqid)) {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
        console.log(`⚠️ Eliminación session (PreKey) que provocan el undefined en el chat`);
      }
    }
  } else if (chat.detect && m.messageStubType == 21) {
    await this.sendMessage(m.chat, { text: `${usuario} \`𝐇𝐀 𝐂𝐀𝐌𝐁𝐈𝐀𝐃𝐎 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 𝐀:\`\n\n> *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: [...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else if (chat.detect && m.messageStubType == 22) {
    await this.sendMessage(m.chat, { text: `${usuario} \`𝐂𝐀𝐌𝐁𝐈𝐎 𝐋𝐀 𝐅𝐎𝐓𝐎 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
  } else if (chat.detect && m.messageStubType == 24) {
    await this.sendMessage(m.chat, { text: `${usuario} > 𝐍𝐔𝐄𝐕𝐀 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎́𝐍:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else if (chat.detect && m.messageStubType == 25) {
    await this.sendMessage(m.chat, { text: `📌 𝐀𝐇𝐎𝐑𝐀 *${m.messageStubParameters[0] == 'on' ? '𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍𝐒' : '𝐓𝐎𝐃𝐎𝐒'}* 𝐏𝐔𝐄𝐃𝐄𝐍 𝐄𝐃𝐈𝐓𝐀𝐑 𝐋𝐀 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else if (chat.detect && m.messageStubType == 26) {
    await this.sendMessage(m.chat, { text: `𝐆𝐑𝐔𝐏𝐎 *${m.messageStubParameters[0] == 'on' ? '𝐂𝐄𝐑𝐑𝐀𝐃𝐎 🔒' : '𝐀𝐁𝐈𝐄𝐑𝐓𝐎 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? '𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍𝐒 𝐏𝐔𝐄𝐃𝐄𝐍 𝐄𝐒𝐂𝐑𝐈𝐁𝐈𝐑' : '𝐘𝐀 𝐓𝐎𝐃𝐎𝐒 𝐏𝐔𝐄𝐃𝐄𝐍 𝐄𝐒𝐂𝐑𝐈𝐁𝐈𝐑'} 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else if (chat.detect && m.messageStubType == 29) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 \n\n🫵 𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍:  ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else if (chat.detect && m.messageStubType == 30) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝘿𝙀𝙅𝘼 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n🫵 𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍:  ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else if (chat.detect && m.messageStubType == 72) {
    await this.sendMessage(m.chat, { text: `${usuario} 𝐂𝐀𝐌𝐁𝐈𝐎 𝐋𝐀 𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄 𝐋𝐎𝐒 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐋𝐄𝐒 𝐀 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else if (chat.detect && m.messageStubType == 123) {
    await this.sendMessage(m.chat, { text: `${usuario} 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐎 𝐋𝐎𝐒 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐋𝐄𝐒.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  } else {
    console.log({messageStubType: m.messageStubType,
    messageStubParameters: m.messageStubParameters,
    type: WAMessageStubType[m.messageStubType], 
    })
  }
}
