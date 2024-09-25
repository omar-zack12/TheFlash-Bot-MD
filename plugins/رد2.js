let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    
    let message = 'مــنــور يـا قــلــب فــلاش لــي الـاوامــر اكــتــب (.اوامر) ⚡️';
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } });
    await conn.sendFile(m.chat, 'https://envs.sh/wHc.jpg', 'image.jpg', message, m);

    let audioPath = './path/audio/audio.mp3';
    await conn.sendMessage(m.chat, { audio: { url: audioPath }, mimetype: 'audio/mp4', ptt: true });
};

handler.customPrefix = /^بوت$/i;
handler.command = new RegExp;

export default handler;
