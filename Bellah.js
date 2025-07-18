//base by DGXeon
//recode by GiddyTennor 

require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    downloadContentFromMessage,
    
    mentionedJid,
    getContentType
    
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')

const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 

const absenData = {};
const { temporary, temmp } = require('./system/tempor')

const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const makeid = randomBytes(3).toString('hex')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')

const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    toIDR,
    capital,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GroupDB,
    kickQueue,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {herokuapi,antidel,botname,author,packname,appname,wapresence,antitag,antilinkgc}= require("./settings.js");
const Heroku = require("heroku-client");  
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./lib/XMEDIA/database/bellahvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./lib/XMEDIA/database/bellahsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./lib/XMEDIA/database/bellahimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./lib/XMEDIA/database/bellahvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./lib/XMEDIA/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./lib/XMEDIA/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./lib/XMEDIA/database/apk.json'))
const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))


global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night mofo🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon mofo🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning mofo 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning mofo🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = Bellah = async (Bellah, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['+', '/',','] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Bellah.decodeJid(Bellah.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Bellah.groupMetadata(m.chat).catch(e => {}) : ''
        
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const Owner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= Owner || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(Bellah, m, premium)
                //theme sticker reply
        
        //premium

			            
            
          //script replier
        async function sendBellahMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Bellah.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        const loli = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: Bellah,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
        //reply
        const reply = (teks) => {
let Toxxiconrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "☌ 𝗩𝗼𝗹𝘁𝗮𝗵 𝗫𝗺𝗱☌",
newsletterJid: "120363257205745956@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: global.botname, 
body: global.ownername,
thumbnailUrl: 'https://files.catbox.moe/c9f4kz.jpg',
sourceUrl: 'https://files.catbox.moe/c9f4kz.jpg',
},
},
text: teks,
}
return Bellah.sendMessage(from, Toxxiconrep, {
quoted: loli,
})
}
            
               
        
		
		
		
	    
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
  const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
            var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
         const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
        const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
       const v51 = ["✅"];    
        const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return Bellah.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = Bellah.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: Bellah.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false
               }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = true 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = true 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: Bellah.getName(botNumber), alias: botname}, owner: { nick: Bellah.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: Bellah.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: Bellah.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

  
  async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'GiddyTennor',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            reply(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            Bellah.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !Owner && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!Owner && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return reply("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!Bellah.public) {
            if (Owner && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	Bellah.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            Bellah.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            Bellah.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            Bellah.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            Bellah.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            Bellah.sendPresenceUpdate(xeonpos, from)
        }
        }
              //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return Bellah.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return Bellah.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return Bellah.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (Owner || isAdmins || !isBotAdmins) return
            Bellah.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await Bellah.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await Bellah.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Bellah.getName(i)}\nFN:${await Bellah.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (Owner) return m.reply(bvl)
               await Bellah.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			.
               Bellah.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (global.autoReact && global.autoReact[m.chat]) {
    const emojis = [
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😍", "😘", "😎", "🤩", "🤔", "😏", "😣", "😥", "😮", "🤐",
        "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
        "😔", "😕", "🙃", "🤑", "😲", "😖", "😞", "😟", "😤", "😢",
        "😭", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳",
        "🤪", "😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
        "😇", "🥳", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈",
        "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "🎃", "😺",
        "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💋", "💌",
        "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "💔", "❤️"
    ]; // List of emojis to choose from

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]; // Pick a random emoji

    try {
        await Bellah.sendMessage(m.chat, {
            react: {
                text: randomEmoji, // Emoji to react with
                key: m.key,        // Message key to react to
            },
        });
    } catch (err) {
        console.error('Error while reacting:', err.message);
    }
}
        
    


        
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }
        
        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await Bellah.sendMessage(m.chat, { forward: val }, { quoted: m })
    }  
            //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isXeonMedia) {
    if(isXeonMedia === "imageMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
    if(isXeonMedia === "videoMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
    if(isXeonMedia === "audioMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isXeonMedia) {
    if(isXeonMedia === "pollCreationMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isXeonMedia) {
    if(isXeonMedia === "locationMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isXeonMedia) {
    if(isXeonMedia === "documentMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isXeonMedia) {
    if(isXeonMedia === "contactMessage"){
        if (Owner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
             //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  Bellah.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Bellah.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        
        
         
               
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }  
        //total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./bellah.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply

const sendapk = (teks) => {
Bellah.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

        const ram = () => {
const ramp = [ "■□□□□□ 10%", "■■□□□□ 20%", "■■■□□□ 40%", "■■■■□□ 60%", "■■■■■□ 80%", "■■■■■■ 95%" ];
const ramm = ramp[Math.floor(Math.random() * ramp.length)];      
return (ramm)  
}  
const sendzip = (teks) => {
Bellah.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XMdia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}
    // Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: Bellah.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Bellah.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Bellah.ev.emit('messages.upsert', msg)
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) Bellah.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            Bellah.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }    
                //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    Bellah.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Bellah.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Bellah.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Bellah.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Bellah.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Bellah.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Bellah.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Bellah.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Bellah.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
}
        const example = (teks) => {
return `\n *Exaple Provide :*\n request *${prefix+command}* ${teks}\n`
}

        
       


//========= [ COMMANDS PLUGINS ] =================================================
const nomore = m.sender.replace(/[^0-9]/g, '')    
  const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}
    let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))  
const voltah = { Bellah, toIDR, Owner, reply,command,isCmd, example, mime, sleep, botNumber, nomore, prefix, reply, text, pickRandom, readmore,runtime,participants,ram,fetchJson,isBotAdmins,isAdmins,pushname,fetchJson,budy,makeid,q,appname,Heroku,herokuapi,loli,downloadContentFromMessage,args,mime}
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, voltah)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================
        switch (isCommand) {            
                case 'menu':
                      case 'voltah': {
    let credits = `
┏━━⬣ ⌜\`Voltah Xmd\`⌟
│ ─≽ *Owner*: *${global.ownername}*
│ ─≽ *Bot Name* :${global.botname}
│ ─≽ *Name* : ${pushname}
│ ─≽ *Version* :*3.0.0*
│ ─≽ *Runtime* : ${runtime(process.uptime())}
│ ─≽ *Totalfeature* : 141
│ ─≽ *Ram* :${ram()}

┏━━「 \`Mode\` 」
│ ─≽ *private*
│ ─≽ *public*
│ ─≽ *recording*
│ ─≽ *typing*
│ ─≽ *autoreact*
│ ─≽ *autoai*
┗━━━━━━━━━━━━━━━♢

┏━━「 \`General\` 」
│ ─≽ *ping*
│ ─≽ *repo*
│ ─≽ *bot*
│ ─≽ *autostatusview*
│ ─≽ *uptime*
│ ─≽ *delete*
│ ─≽ *listplugin*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Download\` 」
│ ─≽ *song*
│ ─≽ *play*
│ ─≽ *play2*
│ ─≽ *tiktok*
│ ─≽ *vv*
│ ─≽ *vv2*
│ ─≽ *anime*
│ ─≽ *detiknews*
│ ─≽ *apk*
│ ─≽ *apk2*
│ ─≽ *fb*
│ ─≽ *igdl2*
│ ─≽ *igdl*
│ ─≽ *lyrics*
│ ─≽ *spotifydown*
│ ─≽ *spotifysearch*
│ ─≽ *igstalk*
│ ─≽ *tiktokstalk*
│ ─≽ *ytmp4*
│ ─≽ *ytmp3*
│ ─≽ *mediafire*
│ ─≽ *playtiktok*
│ ─≽ *play3*
│ ─≽ *song2*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Group\` 」
│ ─≽ *remove*
│ ─≽ *tagall*
│ ─≽ *hidetag*
│ ─≽ *promote*
│ ─≽ *demote*
│ ─≽ *kickall*
│ ─≽ *kill*
│ ─≽ *invite*
│ ─≽ *add*
│ ─≽ *open*
│ ─≽ *close*
│ ─≽ *antilinkgc*
│ ─≽ *antilink*
│ ─≽ *getidgc*
│ ─≽ *ceklinkgc*
│ ─≽ *gcinfo*
│ ─≽ *poll*
│ ─≽ *setppgc*
│ ─≽ *listonline*
│ ─≽ *resetlink*
│ ─≽ *pin*
│ ─≽ *setnamegc*
│ ─≽ *request-join*
│ ─≽ *approve*
│ ─≽ *reject*
│ ─≽ *left*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Sticker\` 」
│ ─≽ *s*
│ ─≽ *take*
│ ─≽ *brat*
│ ─≽ *emojimix*
│ ─≽ *notes*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Owner\` 」
│ ─≽ *getbio*
│ ─≽ *getpp*
│ ─≽ *getplugin*
│ ─≽ *block*
│ ─≽ *unblock*
│ ─≽ *storytext*
│ ─≽ *storyaudio*
│ ─≽ *storyimage*
│ ─≽ *storyvideo*
│ ─≽ *Creategc*
│ ─≽ *listgc*
│ ─≽ *setpp*
│ ─≽ *onlypc*
│ ─≽ *onlygc*
│ ─≽ *reactch*
│ ─≽ *createch*
│ ─≽ *clear*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Maths\` 」
│ ─≽ *kalkulator*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Search\` 」
│ ─≽ *ai*
│ ─≽ *ai2*
│ ─≽ *country*
│ ─≽ *quiz*
│ ─≽ *gpt*
│ ─≽ *gpt2*
│ ─≽ *gpt3*
│ ─≽ *gemma*
│ ─≽ *yts*
│ ─≽ *pinterest*
│ ─≽ *igstory*
│ ─≽ *ytstalk*
│ ─≽ *ffstalk*
│ ─≽ *telestalk*
│ ─≽ *meme*
│ ─≽ *channelinfo*
│ ─≽ *cekkodam*
│ ─≽ *define*
│ ─≽ *sfile*
│ ─≽ *myip*
│ ─≽ *trackip*
│ ─≽ *xvideos*
│ ─≽ *yiffersearch*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Converter\` 」
│ ─≽ *photo*
│ ─≽ *tovideo*
│ ─≽ *toaudio*
│ ─≽ *tovn*
│ ─≽ *translate*
│ ─≽ *flux*
│ ─≽ *deepimage*
│ ─≽ *tourl*
│ ─≽ *logo*
│ ─≽ *tts*
│ ─≽ *ghiblistyle*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Religion\` 」
│ ─≽ *Quran*
│ ─≽ *Bible*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Developer\` 」
│ ─≽ *githubstalk*
│ ─≽ *gitclone*
│ ─≽ *getfile*
│ ─≽ *scweb*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Heroku\` 」
│ ─≽ *getvars*
│ ─≽ *setvar*
│ ─≽ *update*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Others\` 」
│ ─≽ *cc*
│ ─≽ *ckalender*
│ ─≽ *fixtures*
│ ─≽ *news*
│ ─≽ *vcf*
│ ─≽ *save*
│ ─≽ *say*
│──────♢
┗━━━━━━━━━━━━━━━♢

━━「 \`Email\` 」
│ ─≽ *sendemail*
│ ─≽ *tempmail*
│──────♢
┗━━⬣ ⌜ \`New version\`⌟
`
await Bellah.sendMessage(m.chat, {
      image: { url: 'https://url.bwmxmd.online/Adams.s0tso4x6.jpg' },
      gifPlayback: true,
      caption: credits,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
      title: "Voltah Xmd",
      body: "Giddy tennor",
      thumbnailUrl: 'https://url.bwmxmd.online/Adams.s0tso4x6.jpg',
      sourceUrl: "https://tiktok.com",
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: m
                    })
      Bellah.sendMessage(m.chat, {
                        audio: {url:'https://url.bwmxmd.online/Adams.0eltfmev.mp3'},
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: m
                    })
await Bellah.sendMessage(m.chat, { react: { text: "🤍",key: m.key,}})
await Bellah.sendMessage(m.chat, { react: { text: "🩶",key: m.key,}})
await Bellah.sendMessage(m.chat, { react: { text: "🩵",key: m.key,}})
await Bellah.sendMessage(m.chat, { react: { text: "🩷",key: m.key,}})
await Bellah.sendMessage(m.chat, { react: { text: "💛",key: m.key,}})
await Bellah.sendMessage(m.chat, { react: { text: "❤️",key: m.key,}})
await Bellah.sendMessage(m.chat, { react: { text: "💔",key: m.key,}})  
}
          break    
          //========================================================\\   
                case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await Bellah.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break 
          //========================================================\\       
            case 'define': 
if (!q) return m.reply(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return reply(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   Bellah.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply(`*${q}* isn't a valid text`)
    }
    break    
    //========================================================\\                
      case 'lemonmail': case 'sendemail': {
 const args = text.split('|'); if (args.length < 3) return m.reply('Format wrong! Provide: email|subject|message');
const [target, subject, message] = args;
        m.reply('sending email...');
        try {
            const data = JSON.stringify({ "to": target.trim(), "subject": subject.trim(), "message": message.trim() });
            const config = {
                method: 'POST',
                url: 'https://lemon-email.vercel.app/send-email',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
                    'Content-Type': 'application/json',
                    'sec-ch-ua-platform': '"Android"',
                    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
                    'sec-ch-ua-mobile': '?1',
                    'origin': 'https://lemon-email.vercel.app',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'referer': 'https://lemon-email.vercel.app/',
                    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                    'priority': 'u=1, i'
                },
                data: data
            };
            const axios = require('axios');
            const api = await axios.request(config);
            m.reply(`Email: ${JSON.stringify(api.data, null, 2)}`);
        } catch (error) {
            m.reply(`Error: ${error.message}`);
        }
        }
        break
  //========================================================\\                 
case 'myip':
            case 'ipbot':
                if (!Owner) return m.reply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break 
     
      //========================================================\\              
  case 'ghiblistyle': case 'toghibli':{
 try {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (!mime) return Bellah.sendMessage(m.chat, { text: 'Reply to a photo' }, { quoted: m });
 if (!mime.startsWith('image')) return Bellah.sendMessage(m.chat, { text: 'provide a photo!' }, { quoted: m });
 const media = await q.download();
 const base64Image = media.toString('base64');
 await Bellah.sendMessage(m.chat, { text: '⏳ proses bro..' }, { quoted: m });
 const axios = require('axios');
 const response = await axios.post(
 `https://ghiblistyleimagegenerator.cc/api/generate-ghibli`, 
 { image: base64Image }, 
 { headers: {
 'authority': 'ghiblistyleimagegenerator.cc',
 'origin': 'https://ghiblistyleimagegenerator.cc',
 'referer': 'https://ghiblistyleimagegenerator.cc/',
 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 } 
 }
 );
 if (!response.data.success) return Bellah.sendMessage(m.chat, { text: 'provide a photo' }, { quoted: m });
 const ghibliImageUrl = response.data.ghibliImage; 
 const form = new FormData();
 form.append('reqtype', 'fileupload');
 form.append('userhash', '');
 form.append('fileToUpload', Buffer.from(media), 'ghibli.jpg'); 
 const upres = await axios.post('https://catbox.moe/user/api.php', form, {
 headers: form.getHeaders()
 });
 const upUrl = upres.data.trim();
 await Bellah.sendMessage(m.chat, {
 image: { url: ghibliImageUrl },
 caption: `🎨 *Ghibli Style Image Generated*`,
 mentions: [m.sender]
 }, { quoted: m });
 } catch (error) {
 console.error('Error:', error);
 await Bellah.sendMessage(m.chat, { text: `Error: ${error.message || 'error'}` }, { quoted: m });
 }
}
 break
    //========================================================\\     
case "cinfo": case "channelinfo": case "ci": { 
if (!args[0]) return m.reply("⚠️ Format wrong!\nUse: .cinfo <link_channel>");

let match = args[0].match(/whatsapp\.com\/channel\/([\w-]+)/);
if (!match) return m.reply("⚠️ *link must be valid.*");

let inviteId = match[1];

try {
 let metadata = await Bellah.newsletterMetadata("invite", inviteId);
 if (!metadata || !metadata.id) return m.reply("⚠️ *Success fetched channel data.*");

 let caption = `*— 乂 Channel Info —*\n\n` +
 `🆔 *ID:* ${metadata.id}\n` +
 `📌 *Name:* ${metadata.name}\n` +
 `👥 *Followers:* ${metadata.subscribers?.toLocaleString() || "number of followers"}\n` +
 `📅 *Created on:* ${metadata.creation_time ? new Date(metadata.creation_time * 1000).toLocaleString("id-ID") : "date data"}\n` +
 `📄 *Description:* ${metadata.description || "Channel description."}`;

 if (metadata.preview) {
 await Bellah.sendMessage(m.chat, { 
 image: { url: "https://pps.whatsapp.net" + metadata.preview }, 
 caption 
 });
 } else {
 m.reply(caption);
 }
} catch (error) {
 console.error("Error:", error);
 m.reply("an error has occurred ..");
}
}
break  
    
        

//========================================================\\                      
case "xvideos":{
    if (!q) return m.reply(`Example: ${prefix + command} anime`);
    m.reply(mess.wait);
const axios = require('axios');    
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/search/xnxx?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return m.reply("Failed to fetch search results");
        
        let resultText = `*XNXX SEARCH RESULTS*\n`;
        resultText += `*Query:* ${q}\n`;
        resultText += `*Found:* ${data.result.length} videos\n\n`;
        
        const maxResults = 10;
        const displayResults = data.result.slice(0, maxResults);
        
        displayResults.forEach((video, index) => {
            resultText += `*${index + 1}. ${video.title}*\n`;
            resultText += `Info: ${video.info.trim()}\n`;
            resultText += `Link: ${video.link}\n\n`;
        });
        
        if (data.result.length > maxResults) {
            resultText += `_And ${data.result.length - maxResults} more results..._\n`;
            resultText += `_Use ${prefix}xnxxdown [link] to download any video_`;
        }
        
        await Bellah.sendMessage(m.chat, {
            text: resultText
        }, { quoted: m });
        
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
    }
    break

// Dowload
 

    
        
        
            
 //========================================================\\             

case "ai":
case "gpt":
 if (!args.length) {
 return m.reply("provide a question .\n\nExample: *who is Ronaldo?*");
 }
 let query = encodeURIComponent(args.join(" "));
 let apiUrl3 = `https://www.laurine.site/api/ai/heckai?query=${query}`;
 try {
 let response = await fetch(apiUrl3);
 let data = await response.json();
 if (!data.status || !data.data) {
 return reply("❌ AI is inactive.");
 }
 m.reply(`🤖 *AI Response:*\n\n${data.data}`);
 } catch (error) {
 console.error(error);
 m.reply("❌ errror.");
 }
 break
 
  //========================================================\\             
case 'ckalender': case 'createkalender': {
    let args = text.split(' ');
    if (args.length < 2) return m.reply('wrong format! Use: ckalender month year');
    let month = args[0];
    let year = args[1];
    if (isNaN(month) || isNaN(year)) return m.reply('provide a correct format!');
    let apiUrl = `https://fastrestapis.fasturl.cloud/maker/calendar/simple?month=${month}&year=${year}`;
    Bellah.sendMessage(m.chat, { image: { url: apiUrl }, caption: `Kalender month ${month} year ${year}` }, { quoted: loli });
    }
    break   //========================================================\\        
case "insta": {
  try {
    if(!text) return m.reply(`provide an insta url`);
    m.reply(`wait....`);
    let anu = `https://www.ikyiizyy.my.id/api/download/igdl?url=${encodeURIComponent(text)}`;
    const res = await fetch(anu);
    const response = await res.json();
    
    Bellah.sendMessage(m.chat, {
      video: { url: response.result.url },
      mimetype: "video/mp4",
      caption: mess.done
    }, { quoted: m })
  } catch (err) {
    console.log(err);
    return m.reply(err);
  }
}
break;    
   //========================================================\\                
case "cc": case "cvcc": {
    try {
        let [type, jumlah] = args;
        let validTypes = ["MasterCard", "Visa", "Amex", "Discover"];
        if (!type || !validTypes.includes(type)) {
            return m.reply(`⚠️ Format ! Provide type: MasterCard, Visa, Amex, Discover.\n\n🔰 *Use:*\nKetik: *vcc <type> <jumlah>*\nExample: *cc Visa 3*`);
        }
        jumlah = jumlah && !isNaN(jumlah) ? parseInt(jumlah) : 5;
        if (jumlah < 1 || jumlah > 10) return m.reply("⚠️ Jumlah VCC minimal 1 dan maksimal 10!");
        const response = await fetch(`https://api.siputzx.my.id/api/tools/vcc-generator?type=${type}&count=${jumlah}`);
        const data = await response.json();
        if (!data.status || !data.data) return m.reply("⚠️ error.");
        let message = `💳 *Virtual Credit Card (VCC) - ${type}*\n\n`;
        data.data.forEach((card, index) => {
            message += ` *Card ${index + 1}*\n` +
                `• 🏷️ Name: ${card.cardholderName}\n` +
                `• 💳 Number: ${card.cardNumber}\n` +
                `• 📆 Exp: ${card.expirationDate}\n` +
                `• 🔐 CVV: ${card.cvv}\n\n`;
        });
        m.reply(message);
    } catch (err) {
        console.error(err);
        m.reply("⚠️ failed to create  VCC.");
    }
}
    break  
              //========================================================\\    
   case "tts": {
  if(!text) return m.reply("`provide a query`");
  m.reply(`processing your query`);
  try {
    let anu = `https://api.siputzx.my.id/api/tools/tts?text=${encodeURIComponent(text)}&voice=jv-ID-DimasNeural&rate=0%&pitch=0Hz&volume=0%`;
    const response = await axios.get(anu, {
      responseType: 'arraybuffer'
    });
    let buffer = response.data;
    
    Bellah.sendMessage(m.chat, {
      audio: buffer,
      mimetype: "audio/mpeg",
      ptt: true
    })
  } catch (err) {
    console.log(err);
    return err;
  }
}
break;
                //========================================================\\        
case "notes": case "tulis": {
  if (!text) return m.reply('❌provide a text .\n\nExample: nulis Biyu Tamvan');
  
  m.reply(`process.....`);
  const axios = require('axios');
  let apiUrl = `https://nirkyy.koyeb.app/api/v1/nulis?text=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    Bellah.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `📝 *Success* 📝\n\n📌 *Text:* ${text}`
    }, { quoted: m });
  } catch (error) {
    console.log(error);
    m.reply(`❌ Error\nLogs error : ${error.message}`);
  }
}
break
                
//========================================================\\  

case "cekkhodam": case "cekkodam": {
  if (!text) return m.reply('❌ provide a name or title.');
  m.reply(`processing....`);
  const axios = require('axios');
  let apiUrl = `https://nirkyy.koyeb.app/api/v1/khodam?nama=${encodeURIComponent(text)}`;
  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    Bellah.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `🔮 *Check Hodam details* 🔮\n\n📌 *Name:* ${text}`
    }, { quoted: m });
  } catch (error) {
    console.log(error);
    m.reply(`❌ Error\nLogs error : ${error.message}`);
  }
}
break
            //========================================================\\        
case "reactionch": case "reactch": {
 if (!Owner) return m.reply(mess.owner)
 if (!text || !args[0] || !args[1]) 
 return m.reply("Contoh penggunaan:\n.reactch https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v/4054 😂")
 if (!args[0].includes("https://whatsapp.com/channel/")) 
 return m.reply("provide a valid link")
 let result = args[0].split('/')[4]
 let serverId = args[0].split('/')[5]
 let res = await Bellah.newsletterMetadata("invite", result) 
 await Bellah.newsletterReactMessage(res.id, serverId, args[1])
 m.reply(`Failed to make reactions  ${args[1]} in channel ${res.name}`)
}
break
                //========================================================\\       
                case "sfile": {
  if (!text) return m.reply(`Example: ${prefix + command} query`);
  try {
    let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/search/sfile?q=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (data.result.length === 0) return m.reply('No files found!');
    
    let teks = `乂 *SFILE SEARCH* ◦\n\n`;
    data.result.slice(0, 25).forEach((file, index) => {
      teks += `乂 *${index + 1}.* ${file.filename}\n`;
      teks += `乂 *Url* : ${file.url}\n\n`;
    });
    
    await Bellah.sendMessage(m.chat, { text: teks }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break
//========================================================\\                     

case "meme":
case "searchmeme":
case "soundmeme": {
 if (!q) return m.reply("provide a memme title!\nExample: meme wibu 2");
 let args = q.split(" ");
 let limit = parseInt(args[args.length - 1]); 
 let searchQuery = isNaN(limit) ? q : args.slice(0, -1).join(" "); 
 let url = `https://api.agungny.my.id/api/memesound?q=${encodeURIComponent(searchQuery)}`;
 try {
 let res = await fetch(url);
 let json = await res.json();
 if (!json.status || !json.result.length) return reply("Meme tidak ditemukan!");
 let results = isNaN(limit) ? json.result : json.result.slice(0, limit);
 let message = "🎵 *Your Title:*\n\n";
 for (let i = 0; i < results.length; i++) {
 message += `🎶 *${results[i].text}*\n🔗 (${results[i].url})\n\n`;
 await Bellah.sendMessage(from, { audio: { url: results[i].audioUrl }, mimetype: "audio/mpeg" });
 }
 m.reply(message);
 } catch (err) {
 console.error(err);
 m.reply("error. [ failed to process meme ]");
 }
}
break
  //========================================================\\              
case "ff":
case "ffstalk":{
 try {
 if (args.length === 0) return m.reply(`Example: ${prefix + command} 537212033`);
 
 const id = args[0];
 const apiUrl = `https://vapis.my.id/api/ff-stalk?id=${id}`;
 
 const response = await fetch(apiUrl);
 const json = await response.json();
 
 if (!json.status) return m.reply('Failed to fetch data. User ID might be invalid.');
 
 const data = json.data;
 const account = data.account;
 const pet = data.pet_info;
 const guild = data.guild;
 const items = data.equippedItems;
 
 let text = `*👤 FREE FIRE USER INFO*\n\n`;
 text += `*🆔 User ID*: ${account.id}\n`;
 text += `*👤 Username*: ${account.name}\n`;
 text += `*🔰 Level*: ${account.level}\n`;
 text += `*⭐ XP*: ${account.xp}\n`;
 text += `*🌍 Region*: ${account.region}\n`;
 text += `*👍 Likes*: ${account.like}\n`;
 text += `*📝 Bio*: ${account.bio}\n`;
 text += `*🎂 Created*: ${account.create_time}\n`;
 text += `*⏱️ Last Login*: ${account.last_login}\n`;
 text += `*🎖️ Honor Score*: ${account.honor_score}\n`;
 text += `*🎯 BR Points*: ${account.BR_points}\n`;
 text += `*🔫 CS Points*: ${account.CS_points}\n`;
 text += `*🎫 Booyah Pass*: ${account.booyah_pass ? 'Yes' : 'No'}\n`;
 text += `*🏆 Booyah Pass Badge*: ${account.booyah_pass_badge}\n\n`;
 
 if (pet) {
 text += `*🐱 PET INFO*\n`;
 text += `*🐾 Name*: ${pet.name}\n`;
 text += `*🔰 Level*: ${pet.level}\n`;
 text += `*⭐ XP*: ${pet.xp}\n\n`;
 }
 
 if (guild) {
 text += `*👥 GUILD INFO*\n`;
 text += `*🛡️ Name*: ${guild.name}\n`;
 text += `*🆔 ID*: ${guild.id}\n`;
 text += `*🔰 Level*: ${guild.level}\n`;
 text += `*👥 Members*: ${guild.member}/${guild.capacity}\n\n`;
 }
 

 text += `*🎮 EQUIPPED ITEMS*\n`;
 
 if (items.Outfit && items.Outfit.length > 0) {
 text += `\n*👕 Outfit*:\n`;
 items.Outfit.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Pet && items.Pet.length > 0) {
 text += `\n*🐾 Pet*:\n`;
 items.Pet.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Avatar && items.Avatar.length > 0) {
 text += `\n*🎭 Avatar*:\n`;
 items.Avatar.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Banner && items.Banner.length > 0) {
 text += `\n*🏳️ Banner*:\n`;
 items.Banner.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Weapons && items.Weapons.length > 0) {
 text += `\n*🔫 Weapons*:\n`;
 items.Weapons.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Title && items.Title.length > 0) {
 text += `\n*📜 Title*:\n`;
 items.Title.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 await m.reply(text);
 } catch (error) {
 console.error(error);
 await m.reply('An error occurred while fetching the data');
 }
}
 break    
  //========================================================\\              
// sumber? Ch ini 
case 'lyrics': {
  if (!q) return m.reply('Example: lyrics <keyword>,<amount>\n\nExample: lyrics duka,3')
  let [keyword, jumlah] = q.split(',').map(v => v.trim())
  if (!keyword) return m.reply('provide a valid key word')
  jumlah = parseInt(jumlah) || 3

  try {
    let res = await fetch(`https://apikey.sazxofficial.web.id/api/search/lyrics?q=${encodeURIComponent(keyword)}`)
    let data = await res.json()
    if (!data.status || !data.result || data.result.length === 0) {
      return m.reply('Lyrics not found.')
    }
    let hasil = data.result.slice(0, jumlah).map((item, i) => {
      return `*${i + 1}. ${item.title}* - _${item.artist}_\n\n${item.lyricSingkat.trim()}\n`
    }).join('\n────────────\n\n')
    m.reply(`*Hasil Lirik: ${keyword}*\n\n${hasil}`)
  } catch (e) {
    console.error(e)
    m.reply('an error has occurred while fetching lyrics.')
  }
}
  break

 
//========================================================\\                    

case "ytstalk": case "infoyt": case "youtubestalk": {
 if (!text) return m.reply(example("ytstalk channel name"))
 try {
 const apiUrl = `https://fastrestapis.fasturl.cloud/stalk/youtube/simple?username=${encodeURIComponent(text)}`
 const response = await fetch(apiUrl)
 const data = await response.json()
 if (data.status !== 200) {
 return m.reply(`Error: ${data.content || "Failed to fetch data"}`)
 }
 const result = data.result
 const additionalInfo = result.additionalInfo
 let caption = `*🔍 YOUTUBE CHANNEL INFO*\n\n`
 caption += `*Channel:* ${result.channel}\n`
 caption += `*Description:* ${result.description || "No description"}\n`
 caption += `*URL:* ${result.url}\n\n`
 caption += `*📊 STATS*\n`
 caption += `*Subscribers:* ${additionalInfo.totalSubs || "0"}\n`
 caption += `*Total Videos:* ${additionalInfo.totalVideos || "0"}\n`
 caption += `*Total Views:* ${additionalInfo.views || "0"}\n`
 caption += `*Joined:* ${additionalInfo.join || "Unknown"}\n`
 if (result.socialMediaLinks && result.socialMediaLinks.length > 0) {
 caption += `\n*🔗 SOCIAL MEDIA*\n`
 result.socialMediaLinks.forEach((link, index) => {
 caption += `${index + 1}. ${link.url}\n`
 })
 }
 if (result.latestVideos && result.latestVideos.length > 0) {
 caption += `\n*📺 LATEST VIDEOS*\n`
 for (let i = 0; i < Math.min(3, result.latestVideos.length); i++) {
 const video = result.latestVideos[i]
 caption += `${i + 1}. *${video.title}*\n`
 caption += ` Views: ${video.views}\n`
 caption += ` URL: ${video.videoUrl}\n\n`
 }
 }
 await Bellah.sendMessage(m.chat, {
 image: { url: result.profile },
 caption: caption
 }, { quoted: loli})
 } catch (error) {
 console.log(error)
 m.reply('Error occured while getting information')
 }
}
break
            //========================================================\\        
      case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} username`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await Bellah.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username is private on Instagram!');
				}
			}
			break    //========================================================\\    
     

case 'logo': {
  if (!text) {
    return m.reply("Provide title, description, and slogan logo. Format: .logo Judul|Ide|Slogan");
  }

  const [title, idea, slogan] = text.split("|");

  if (!title || !idea || !slogan) {
    return m.reply("Format invalid. Use : .logo Title|Description|Slogan\n\n*Example :* .logo Takashi|Singer|subscribe");
  }

  try {
    const payload = {
      ai_icon: [333276, 333279],
      height: 300,
      idea: idea,
      industry_index: "N",
      industry_index_id: "",
      pagesize: 4,
      session_id: "",
      slogan: slogan,
      title: title,
      whiteEdge: 80,
      width: 400
    };

    const { data } = await axios.post("https://www.sologo.ai/v1/api/logo/logo_generate", payload);
    
    if (!data.data.logoList || data.data.logoList.length === 0) {
      return m.reply("Logo Data");
    }

    const logoUrls = data.data.logoList.map(logo => logo.logo_thumb);
    
    for (const url of logoUrls) {
      await Bellah.sendMessage(m.chat, { image: { url: url } });
    }
  } catch (error) {
    console.error("Error generating logo:", error);
    await m.reply("Failed to Create Logo");
  }
};
break    	
                //========================================================\\   
  case "ytmp3":
  if (!q.includes("youtube.com") && !q.includes("youtu.be")) return m.reply("provide a you tube link!");
  let [link, quality] = q.split(",");
  let qualityOptions = ["64kbps", "128kbps", "192kbps", "256kbps", "320kbps"];
  if (!quality) {
    let qualityList = qualityOptions.map(q => `▫️ ${q}`).join("\n");
    return m.reply(
      `🔊 *provide query in correct format:*\n\n${qualityList}\n\n format: *ytmp3 linkyt,size*\nContoh: *ytmp3 ${link},320kbps*`
    );
  }
  if (!qualityOptions.includes(quality)) return m.reply(
    `⚠️ *provide a valid query:*\n\n${qualityOptions.map(q => `▫️ ${q}`).join("\n")}\n\nuse format: *ytmp3 linkyt,size*\nExample: *ytmp3 ${link},320kbps*`
  );
  let apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp3?url=${encodeURIComponent(link)}&quality=${quality}&server=auto`;
  m.reply("Processing audio download ...");
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();
    if (data.status !== 200) return m.reply("failed to fetch audio!");
    let { title, metadata, author, url, media } = data.result;
    let caption = `🎵 *Title:* ${title}\n📌 *Duration:* ${metadata.duration}\n👤 *Channel:* ${author.name}\n📆 *Upload:* ${metadata.uploadDate}\n🎶 *Date:* ${quality}\n🔗 *Link:* ${url}`;
    Bellah.sendMessage(m.chat, { 
      audio: { url: media }, 
      mimetype: "audio/mp4", 
      fileName: `${title}.mp3`
    }, { quoted: m });
    m.reply(caption);
  } catch (e) {
    console.error(e);
    m.reply("failed to get your audio!");
  }
  break   
               
            
            //========================================================\\      
                case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply message you want to delete')
				await Bellah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
   //========================================================\\                    
                case 'pin': case 'unpin': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!isAdmins) return m.reply(mess.admin)
				if (!isBotAdmins) return m.reply(`bot must be admin first`)
				await Bellah.sendMessage(m.chat, { pin: { type: command == 'pin' ? 1 : 0, time: 2592000, key: m.quoted ? m.quoted.key : m.key }})
			}
			break
      //========================================================\\          
                case 'request-join': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!isAdmins) return m.reply(mess.admin)
				if (!isBotAdmins) return m.reply(mess.botAdmin)
				const _list = await Bellah.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
				if (/a(p||pp||cc)(ept||rove)|true|ok/i.test(args[0])) {
					await Bellah.groupRequestParticipantsUpdate(m.chat, _list, 'approve')
				} else if (/reject|false|no/i.test(args[0])) {
					await Bellah.groupRequestParticipantsUpdate(m.chat, _list, 'reject')
				} else {
					m.reply(`List Request Join :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*Nothing*'}\nExample : ${prefix + command} approve/reject`)
				}
			}
			break
//========================================================\\
case 'typing':
                if (!Owner) return m.reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    m.reply(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    m.reply(`Successfully changed Auto-Typing to ${q}`)
                }
            break
//========================================================\\
case 'recording':
                if (!Owner) return m.reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    m.reply(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    m.reply(`Successfully changed Auto-Recording to ${q}`)
                }
            break
//========================================================\\
case 'play2': {
    if (args.length === 0) return Bellah.sendMessage(m.chat, { text: `which song from YouTube do you want to download?, example:\nplay dj kane` }, { quoted: m });

    const query = args.join(' ');
    const axios = require('axios');
    const yts = require('yt-search');

    try {
        const search = await yts(query);
        if (!search || search.all.length === 0) return Bellah.sendMessage(m.chat, { text: 'Lagu yang Anda cari tidak ditemukan.' }, { quoted: m });

        const video = search.all[0];
        const detail = `* Youtube Audio Play*

*❖ Title* : ${video.title}
*❖ Views* : ${video.views}
*❖ Artist* : ${video.author.name}
*❖ Period* : ${video.ago}
*❖ URL* : ${video.url}
_processing audio..._`;

        await Bellah.sendMessage(m.chat, { text: detail }, { quoted: m });

        const format = 'mp3';
        const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(video.url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.data || !response.data.success) return Bellah.sendMessage(m.chat, { text: 'audio.' }, { quoted: m });

        const { id, title, info } = response.data;
        const { image } = info;

        while (true) {
            const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (progress.data && progress.data.success && progress.data.progress === 1000) {
                const downloadUrl = progress.data.download_url;

                await Bellah.sendMessage(m.chat, {
                    audio: { url: downloadUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${title}.mp3`
                }, { quoted: m });
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (error) {
        console.error('Error:', error);
        Bellah.sendMessage(m.chat, { text: 'Could not find your song.' }, { quoted: loli });
    }
}
break;
//========================================================\\
case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await Bellah.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
//========================================================\\
case 'mediafire': {
  if (!text) return m.reply('provide a mediafire link');
  const url = `https://bk9.fun/download/mediafire?url=${text}`;
  axios.get(url)
    .then(response => {
      const result = response.data;
      if (result.status) {
        const link = result.BK9.link;
        axios.get(link, { responseType: 'arraybuffer' })
          .then(response => {
            const buffer = Buffer.from(response.data, 'binary');
            Bellah.sendMessage(m.chat, { document: buffer, filename: 'file.zip', mimetype: 'application/zip' }, { quoted: m });
          })
          .catch(error => {
            m.reply('Error: ' + error.message);
          });
      } else {
        m.reply('Gagal mengunduh file MediaFire');
      }
    })
    .catch(error => {
      m.reply('Error: ' + error.message);
    });
  break;
}
//========================================================\\
case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isGroupOwner && !Owner) return reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.admin)
                if (!text) return reply('Text ?')
                await Bellah.groupUpdateSubject(m.chat, text)
                m.reply(mess.done)
                break
//========================================================\\
case 'yts': case 'ytsearch': {
                if (!text) return m.reply(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                Bellah.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: loli })
            }
            break
//========================================================\\
case 'ytmp4': {
  const axios = require('axios');
  const input = text?.trim();
  if (!input) return reply(`play:\n.ytmp4 https://youtu.be/xxxx,720\n\nList for results:\n- 360\n- 480\n- 720\n- 1080`);
  const [url, q = '720'] = input.split(',').map(a => a.trim());
  const validUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
  if (!validUrl) return reply(`❌ URL YouTube is not valid!`);
  const qualityMap = {
    "360": 360,
    "480": 480,
    "720": 720,
    "1080": 1080
  };

  if (!qualityMap[q]) {
    return m.reply(`❌ Quality must be valid!\nexample: 360, 720, 1080`);
  }
  const quality = qualityMap[q];
  const sendResult = async (meta) => {
    await Bellah.sendMessage(m.chat, {
      image: { url: meta.image },
      caption: `✅ *Title:* ${meta.title}\n📥 *Type:* MP4\n🎚️ *Quality:* ${meta.quality}p\n\nSending  file...`,
    }, { quoted: m });
    await Bellah.sendMessage(m.chat, {
      document: { url: meta.downloadUrl },
      mimetype: 'video/mp4',
      fileName: `${meta.title}.mp4`
    }, { quoted: m });
  };

  try {
    const { data: start } = await axios.get(
      `https://p.oceansaver.in/ajax/download.php?button=1&start=1&end=1&format=${quality}&iframe_source=https://allinonetools.com/&url=${encodeURIComponent(url)}`,
      {
        timeout: 30000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      }
    );
    if (!start.progress_url) return m.reply(`❌ failed to start progress`);
    let progressUrl = start.progress_url;
    let meta = {
      image: start.info?.image || "https://telegra.ph/file/fd0028db8c3fc25d85726.jpg",
      title: start.info?.title || "Unknown Title",
      downloadUrl: "",
      quality: q,
      type: "mp4"
    };
    let polling, attempts = 0;
    const maxTry = 40;
    reply('⏳ processing video...');
    do {
      if (attempts >= maxTry) return reply(`❌ Timeout process!`);
      await new Promise(r => setTimeout(r, 3000));
      try {
        const { data } = await axios.get(progressUrl, {
          timeout: 15000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
          }
        });
        polling = data;
        if (polling.progress < 100) console.log(`Progress: ${polling.progress}%`);
      } catch (e) {
        console.log(`Polling ${attempts + 1} gagal`);
      }
      attempts++;
    } while (!polling?.download_url);
    if (!polling.download_url) return reply(`❌ failed to get download from the link`);
    meta.downloadUrl = polling.download_url;
    return await sendResult(meta);
  } catch (e) {
    console.error(e);
    return reply(`❌ error has occurred: ${e.message || 'err'}`);
  }
}
break
 
 
 
 
//========================================================\\
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XMEDIA`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Bellah.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: loli }).catch((err) => reply(mess.error))
break


 //========================================================\\
case 'tiktokstalk':
case 'ttstalk': {
    if (!text) return m.reply(`Provide TikTok Username\n\nExample: ${prefix + command} `);
    Bellah.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    
    try {
        const respon = await fetchJson(`https://api.elxyzgpt.xyz/stalk/tiktok?apikey=KC-d25a3f0c02be4021&username=${encodeURIComponent(text)}`);
        const user = respon.result.user;
        const stats = respon.result.stats;
        let teks = `
┌──「 *STALKING* 」
▢ *🔖 Name:* ${user.nickname}
▢ *🔖 Username:* ${user.uniqueId}
▢ *👥 Followers:* ${stats.followerCount}
▢ *🫂 Following:* ${stats.followingCount}
▢ *📌 Bio:* ${user.signature}
▢ *🏝️ Posts:* ${stats.videoCount}
▢ *❣️ Likes:* ${stats.heartCount}
▢ *🔗 Link:* https://tiktok.com/@${user.uniqueId}
└────────────`;

        await Bellah.sendMessage(
            m.chat, 
            { image: { url: user.avatarLarger }, caption: teks }, 
            { quoted: loli }
        );
    } catch (err) {
        console.error(err);
        m.reply(`yooh. Provide valid TikTok username.`);
    }
}
break;

//========================================================\\
case 'igstalk': {
if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} giddy_tennor_`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await Bellah.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: loli})
      } catch {
        m.reply(`Make sure the username comes from *Instagram*`)
      }
}
break

//========================================================\\
case 'ghstalk': case 'githubstalk':{
if (!q) return m.reply(`Example ${prefix+command} GiddyTennor`)
await reply(`processing data`)
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
Bellah.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: loli } )
}
break
//========================================================\\
case 'quiz': {
  if (!text) return m.reply(`whats your question ?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah Xrzteam, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
m.reply(kanjuthann)
}
break
//========================================================\\
case 'country': {
				if (!text) return m.reply(' Provide a country name!\nExample: *.country Japan*');

				try {
					// Panggil API untuk mendapatkan data negara
					let res = await fetchJson(`https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(text)}`); // Ganti dengan URL API yang sesuai
		
					if (!res.status) return m.reply('fetching data .');

					let data = res.data;
					let continent = `${data.continent.name} ${data.continent.emoji}`;

					// Format informasi negara
					let info = `🌍 *Information data: ${data.name}*\n\n`;
					info += `🌐 *Continent:* ${continent}\n`;
					info += `🏙️ *Capital:* ${data.capital}\n`;
					info += `📞 *Kode Telephone:* ${data.phoneCode}\n`;
					info += `💱 *Currency:* ${data.currency}\n`;
					info += `🗺️ *Map:* ${data.googleMapsLink}\n`;
					info += `🌐 *TLD Internet:* ${data.internetTLD}\n`;
					info += `🗣️ *Language:* ${data.languages.native.join(", ")}\n`;
					info += `🏞️ *Distance:* ${data.area.squareKilometers.toLocaleString()} km² (${data.area.squareMiles.toLocaleString()} mi²)\n`;
					info += `🚗 *Driving side:* ${data.drivingSide == "Centre" ? "left" : "right"}\n`;
					info += `⭐ *Famous Traditions:* ${data.famousFor}\n`;
					info += `🏛️ *Constitutionalform:* ${data.constitutionalForm}\n`;
					info += `📍 *Coordinates:* ${data.coordinates.latitude}, ${data.coordinates.longitude}`;

					// Kirim informasi bersama gambar bendera
					await Bellah.sendMessage(m.chat, {
						image: { url: data.flag },
						caption: info
					}, { quoted: loli });

				} catch (error) {
					console.log(error);
					m.reply('Failed to get data.');
				}
			}
			break;

//========================================================\\
case 'spotifysearch': {
  if (!text) return m.reply('provide query');
  const query = text;
  const url = `https://api.siputzx.my.id/api/s/spotify?query=${query}`;
  axios.get(url)
    .then(response => {
      const data = response.data.data;
      if (!data.length) return reply('Lagu tidak ditemukan');
      let result = 'Hasil Pencarian Lagu:\n\n';
      data.forEach(lagu => {
        result += `* Title: ${lagu.title}\n`;
        result += `* Artist: ${lagu.artist.name}\n`;
        result += `* Duration: ${lagu.duration}\n`;
        result += `* Thumbnail: ${lagu.thumbnail}\n\n`;
      });
      reply(result);
    })
    .catch(error => {
      m.reply('Error: ' + error.message);
    });
  break;
}
//========================================================\\
case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isGroupOwner && !Owner) return reply(mess.owner)
                if (!isBotAdmins) return reply(mess.admin)
                await Bellah.groupRevokeInvite(m.chat)
                    .then(res => {
                        m.reply(`Reset Success`)
                    })
            break
//========================================================\\
case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('This is the online list!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await Bellah.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => m.reply('Gagal'))
			}
			break
//========================================================\\
case 'spotifydown': {
  if (!text) return m.reply('provide a spotify link');
  const url = `https://fastrestapis.fasturl.cloud/downup/spotifydown?url=${encodeURIComponent(text)}`;
  axios.get(url)
    .then(response => {
      const result = response.data;
      if (result.status === 200) {
        const metadata = result.result.metadata;
        const link = result.result.link;
        const judul = metadata.title;
        const artis = metadata.artists;
        const album = metadata.album;
        const cover = metadata.cover;
        const releaseDate = metadata.releaseDate;
        Bellah.sendMessage(m.chat, { audio: { url: link }, filename: `${judul}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m, caption: `Judul: ${judul}\nArtis: ${artis}\nAlbum: ${album}\nRelease Date: ${releaseDate}` });
      } else {
        m.reply('failed....');
      }
    })
    .catch(error => {
      m.reply('Error: ' + error.message);
    });
  break;
}
//========================================================\\
case "apk":
      case "apkdl":
        {
          if (!text) return m.reply("*Which apk do you want to download?*");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await Bellah.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: loli });
          }
      break;
//========================================================\\
case 'onlygroup':
            case 'onlygc':
                if (!Owner) return m.reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    m.reply(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    m.reply(`Successfully Changed Onlygroup To ${q}`)
                }
            break
//========================================================\\
case 'onlyprivatechat':
            case 'onlypc':
                if (!Owner) return m.reply(mess.owner)
                if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    m.reply(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    m.reply(`Successfully Changed Only-Pc To ${q}`)
                }
            break
//========================================================\\
case "setppgc": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.adminbot)
if (!isBotAdmins) return m.reply(mess.admin)
if (/image/g.test(mime)) {
let media = await Bellah.downloadAndSaveMediaMessage(qmsg)
await Bellah.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Group profile photo changed successfully by VolTah Xmd")
} else return m.reply('tag/reply foto')}
break
//========================================================\\
case "setppbot": case "setpp": {
if (!Owner) return m.reply(mess.owner)
if (/image/g.test(mime)) {
let media = await Bellah.downloadAndSaveMediaMessage(qmsg)
await Bellah.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("Profile photo changed by Bellah Xmd")
} else return m.reply('tag/reply foto')}
break
//========================================================\\
case "listgc": case "cekid": case "listgrup": {
let gcall = Object.values(await Bellah.groupFetchAllParticipating().catch(_=> null))
let listgc = `*𝐋𝐈𝐒𝐓 𝐀𝐋𝐋 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏*\n\n`
await gcall.forEach((u, i) => {
listgc += `Title : ${u.subject}\nID : ${u.id}\nMember : ${u.participants.length}\nStatus : ${u.announce == true ? "Tertutup" : "Terbuka"}\nCreator : ${u.owner ? u.owner.split('@')[0] : 'Active'}\n\n`
})
m.reply(listgc)
}
break
//========================================================\\
case 'poll': {
	if (!Owner) return m.reply(mess.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await Bellah.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
//========================================================\\
case 'profile': case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`)
			}
			break
//========================================================\\
case 'antilinkgc': {
               if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.admin)
if (!isAdmins && !Owner) return XeonStickAdmin()
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  m.reply(`${command} is disabled`)
               }
            }
            break
//========================================================\\
case 'close':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !Owner) return reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.admin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return m.reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                m.reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    Bellah.groupSettingUpdate(m.chat, 'announcement')
                    
                  m.reply(close)
                }, timer)
                break
//========================================================\\
case 'open':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !Owner) return reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.admin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return m.reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                m.reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    Bellah.groupSettingUpdate(m.chat, 'not_announcement')
                    m.reply(open)
                }, timer)
                break
//========================================================\\
case 'add':
                if (!m.isGroup) return m.reply(mess.group)
                if(!Owner) return m.reply(mess.owner)
                if (!isBotAdmins) return reply(mess.admin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Bellah.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                m.reply(mess.done)
                break
//========================================================\\
case 'creategc': case 'creategroup': {
if (!Owner) return m.reply(mess.owner)
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await Bellah.groupCreate(args.join(" "), [])
let response = await Bellah.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
Bellah.sendMessage(m.chat, { text:teksop, mentions: await Bellah.parseMention(teksop)}, {quoted:m})
} catch {
	m.reply(`Error`)
	}
}
break
//========================================================\\
case 'translate':{
  	if (!q) return m.reply(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       reply(result.text)
    } catch (e) {
        return m.reply(err)
    } 
    }
    break
//========================================================\\
case "tourl": {
if (!/image/.test(mime)) return m.reply(example("tag/reply photo"))
let media = await Bellah.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'skyzopedia.png');

let teks = directLink.toString()
await Bellah.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
//========================================================\\
case 'anime': {
if (!text) return m.reply(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await m.reply("wait.....")
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return m.reply(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await Bellah.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
//========================================================\\
case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    m.reply(bibleChapter)
  } catch (error) {
    m.reply(`Error: ${error.message}`)
  }
  }
  break
//========================================================\\
case 'quran': {
    try {
    
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    m.reply(quranSurah)

    if (json.data.recitation.full) {
      Bellah.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    m.reply(`Error: ${error.message}`)
  }
  }
  break
//========================================================\\
case 'detiknews' : {
  if (!text) {
    return m.reply(`Provide a request.\n\nExample:\n.${command} ruu tni`)
  }

  try {
    const url = `https://www.detik.com/search/searchall?query=${encodeURIComponent(text)}`
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    let result = []
    $('.media__text').each((_, el) => {
      const media = $(el).find('h2').text().trim()
      const title = $(el).find('a').text().trim()
      const href = $(el).find('a').attr('href')
      const description = $(el).find('.media__desc').text().trim()

      if (title && href) {
        result.push({
          media,
          title,
          url: href,
          description
        })
      }
    })

    if (!result.length) return m.reply('❌ provide a valid request.')

    const list = result.slice(0, 10).map(item => {
      return `📰 *${item.title}*\n📌 ${item.media || 'Detik News'}\n🔗 ${item.url}`
    }).join('\n\n')

    await m.reply(`🔍 *Here are the latest news:*\n\n${list}`)
    
  } catch (e) {
    console.error(e)
    m.reply('⚠️ failed to get data.')
  }
}
break
//========================================================\\
case 'storyaudio':
			case 'upswaudio': {
				if (!Owner) return mmreply(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await Bellah.downloadAndSaveMediaMessage(quoted);
					await Bellah.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(db.data.users)
					});
					await m.reply('✅ success upload audio to status!');
				} else {
					m.reply('⚠️ Reply to audio with command ! 🎧');
				}
			}
			break;
//========================================================\\
case 'storyimg':
			case 'storyimage':
			case 'upswimg': {
				if (!Owner) return m.reply(mess.owner);
				if (/image/.test(mime)) {
					var imagesw = await Bellah.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Size File*: ${fileSize}\n`;
					defaultCaption += `🖼️ *Media Type*: ${mediaType}\n`;
					defaultCaption += `⏰ *Time*: ${sendTime}\n`;
					defaultCaption += `👤 *Sender*: ${sender}`;
					await Bellah.sendMessage('status@broadcast', {
						image: { url: imagesw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await m.reply('✅ success uploaded photo to status! 🖼️✨');
				} else {
					m.reply('⚠️ reply to image with command ! 🖼️');
				}
			}
			break;
//========================================================\\
case 'storyvideo':
			case 'upswvideo': {
				if (!Owner) return m.reply(mess.owner);
				if (/video/.test(mime)) {
					var videosw = await Bellah.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Size File*: ${fileSize}\n`;
					defaultCaption += `🎥 *Media Type*: ${mediaType}\n`;
					defaultCaption += `⏰ *Time*: ${sendTime}\n`;
					defaultCaption += `👤 *Sender*: ${sender}`;
					await Bellah.sendMessage('status@broadcast', {
						video: { url: videosw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await m.reply('✅ success uploaded video to status!');
				} else {
					m.reply('⚠️ reply a video! 🎥');
				}
			}
			break;
//========================================================\\
case 'storytext':
			case 'upswtext': {
				if (!Owner) return m.reply(mess.owner);
				if (!text) return m.reply('where is the text?');
				await Bellah.sendMessage('status@broadcast', { 
					text: text 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(db.data.users) 
				});
				m.reply('Succes uploaded text!');
			}
			break;
//========================================================\\
case 'unblock': 
			case 'unban': {
				if (!Owner) return reply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await Bellah.updateBlockStatus(users, 'unblock')
				await reply(mess.done);
			}
			break;
//========================================================\\
case 'block': 
			case 'ban': {
				if (!Owner) return m.reply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await Bellah.updateBlockStatus(users, 'block')
				await m.reply(mess.done);
			}
			break;
        
              //========================================================\\
                case "repo": {
  try {
    let me = m.sender;
 const response = await axios.get(`https://api.github.com/repos/Tennor-modz/Bellah-Xmd`)
    if (response.status === 200) {
      const repoData = response.data
      const repos = `
*BOT NAME:*
> ${repoData.name}

*STARS:* 
> ${repoData.stargazers_count}

*FORKS:* 
> ${repoData.forks_count}

*GITHUB LINK:* 
https://github.com/Tennor-modz/Bellah-Xmd

@${me.split("@")[0]}👋, Star ⭐ fork and deploy my repo 🤭

> 𝗩𝗼𝗹𝘁𝗮𝗵 𝗫𝗺𝗱`;
Bellah.sendMessage(m.chat, { text : repos,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: 'https://chat.whatsapp.com/Hs0AwkOaFzbGi5sjicdeTR',
serverMessageId: 20,
newsletterName: '𝗩𝗼𝗹𝘁𝗮𝗵'
},
externalAdReply: {
title: "𝗩𝗼𝗹𝘁𝗮𝗵", 
body: "",
thumbnail: null, 
sourceUrl: null,
mediaType: 1
}}}, { quoted : m })
    } else {
      await m.reply(`Failed to fetch repository data!`)
    }
  } catch (error) {
    console.error(error)
    await m.reply(`Couldn't find repository!`)
  }
}
break;
//========================================================\\
                case 'autoswview':
    case 'autostatusview':{
             if (!Owner) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = true
                  reply(`${command} is disabled`)
               }
            }
            break
//========================================================\\
case "kalkulator":{
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
reply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
reply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
reply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
reply(`${nilai_one / nilai_two}`)
} else reply(`*Example* : ${prefix + command} 1 + 1`)
}
break
            
//========================================================\\
case "ping": {
await m.reply(`𝗩𝗼𝗹𝗧𝗮𝗵 𝗦𝗽𝗲𝗲𝗱 𝗖𝗵𝗲𝗰𝗸`)
  const memoryUsage = process.memoryUsage();
  const cpuInfo = os.cpus().map(cpu => ({
    total: Object.values(cpu.times).reduce((a, b) => a + b, 0),
    times: cpu.times,
  }));
  const totalCpuInfo = cpuInfo.reduce((acc, cpu) => ({
    total: acc.total + cpu.total,
    times: {
      user: (acc.times.user || 0) + (cpu.times.user || 0),
      nice: (acc.times.nice || 0) + (cpu.times.nice || 0),
      sys: (acc.times.sys || 0) + (cpu.times.sys || 0),
      idle: (acc.times.idle || 0) + (cpu.times.idle || 0),
      irq: (acc.times.irq || 0) + (cpu.times.irq || 0),
    },
  }), {
    total: 0,
    times: {},
  });

  const startTime = performance.now();
  const latency = performance.now() - startTime;
  const finalStatus = `𝗩𝗼𝗹𝗧𝗮𝗵 𝗫𝗺𝗱: ${latency.toFixed(4)} ms`;
  m.reply(finalStatus);
}
break;  
            //========================================================\\    
                case 'uptime': { 

         reply (`━━━━━━━━━━━━━━━━━\n\◉‿◉Welcome ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\*Voltah Xmd has been running for*  : ${runtime(process.uptime())} \n\━━━━━━━━━━━━━━━━━`); 
}
break;
          
                //group//
//========================================================\\
    case 'remove':
                if (!isAdmins && !isGroupOwner && !Owner) return m.reply(mess.admin)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isGroupOwner && !Owner) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.admin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Bellah.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                m.reply(mess.done)
                break        
  //========================================================\\            
            case "tagall": case "tag": {
if (!isGroup) return m.reply(`command is only for groups`)
if (!isAdmins && !Owner) return m.reply(mess.admin)
if (!text) return m.reply("where is the text")
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Bellah.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
           //========================================================\\          
                case "hidetag": case "z": case "h": {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins && !Owner) return m.reply(mess.admin)
if (!m.quoted && !text) return m.reply(example("text/replytext"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Bellah.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
 //========================================================\\           
                case "demote": case "demote": {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins && !Owner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(`bot is not an admin in this group`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Bellah.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Member ${target.split("@")[0]} is no longer an admin in this group`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('254XX'))}
break
                //download// //========================================================\\ 
                case "song2":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
                
               await reply(`processing your request`);
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                Bellah.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: loli })
            }
            break
     //========================================================\\ 
   case "promote": case "promot": {
if (!isGroup) return m.reply(`for group only`)
if (!isAdmins && !Owner) return m.reply(`Command reserved for group admins only`)
if (!isBotAdmins) return m.reply(`bot is not an admin idiot`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Bellah.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`User ${target.split("@")[0]} is now an admin`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('254XXX/@tag'))}
break    
//========================================================\\
case 'toimage':
            case 'photo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await m.reply(`processing photo`)
                let media = await Bellah.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Bellah.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: loli
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
//========================================================\\          
case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker with caption *${prefix + command}*`)
                await m.reply(`processing your video`)
                let media = await Bellah.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Bellah.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: loli
                })
                await fs.unlinkSync(media)

            }
            break
//========================================================\\     
case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                await m.reply(`processing`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Bellah.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
//========================================================\\     
case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await m.reply(`processing your voice note`)
                let media = await Bellah.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                Bellah.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: loli
                })

            }
            break
            
//========================================================\\          
case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await m.reply(`processing your audio`)
                let media = await Bellah.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Bellah.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: loli
                })

            }
            break
            
//========================================================\\           
case 'linkgroup':
            case 'link':
            case 'linkgc':
            case 'invite':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isGroupOwner && !Owner) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.admin)
                let response = await Bellah.groupInviteCode(m.chat)
                Bellah.sendText(m.chat, `👥 *GROUP LINK BY VolTah XMD*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
  //========================================================\\             
case 'play': {
  try {
    let query = args.join(' ')
    if (!query) return reply('*Example :* .play Only We Know Speed Up')

    let searchResult = await yts(query)
    let video = searchResult.videos[0]

    let { data } = await axios.get('https://api.yogik.id/downloader/youtube', {
      params: { url: video.url, format: 'audio' },
      headers: { Accept: 'application/json' }
    })

    let result = data.result

    await Bellah.sendMessage(m.chat, {
      audio: { url: result.download_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title: result.title,
          body: result.author_name,
          thumbnailUrl: result.thumbnail_url,
          sourceUrl: video.url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })

  } catch (e) {
    reply(e.message)
  }
}
break;
      
      
          

//========================================================\\
    case "play3":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
               
  let search = await yts(`${text}`);
if (!search || search.all.length === 0) return reply(`*aaah!* ☹️`);             
               let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
let menu = `⨳ 「 *YOUTUBE PLAY* 」

〉 𝐈𝐃:${videoId}

〉 𝐓𝐈𝐓𝐋𝐄:${title}

〉 𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍:${duration.timestamp}

〉 𝐕𝐈𝐄𝐖𝐒:${views}

> ©𝐁𝐲 𝐒𝐢𝐥𝐞𝐧𝐜𝐞𝐫 𝐌𝐞𝐝𝐢𝐚 𝐓𝐞𝐚𝐦 (SMT)`;
               await Bellah.sendMessage(from, { image: { url: 'https://img12.pixhost.to/images/1492/584866023_skyzopedia.jpg' },caption: menu,gifPlayback: true }, { quoted: loli });

               await m.reply(`sending audio....`);
         
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                Bellah.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: loli })
            }
            break
                    
        //========================================================\\  
        
case 'kickall': {
 if (!m.isGroup) return m.reply('Command  only for Group!')
 if (!isGroupOwner) return m.reply('Only Owner & Admin can use this command!')
 if (!isAdmins) return m.reply('Bot must be Admin in grup!')
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await Bellah.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(3000);
 }
 m.reply(`Voltah XMD HAS SUCCESSFULLY REMOVED ALL GROUP PARTICIPANTS`);
}
break  
        
 //========================================================\\  
case 'tiktok': case "tt": { 
             
    if (!text) return m.reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return m.reply(`Link Invalid!!`);
    reply("Please Wait..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return m.reply('Api error');
            
            // Mengambil URL video dan audio
        const title = `*Successfully*`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            Bellah.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            Bellah.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: null });
        })
        .catch(err => reply(err.toString()));
}
break;
        //========================================================\\  
                //converter//
case 'blowjob':
  let assss =  await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff =  fetchBuffer(assss.data.url)
    var bogif =  buffergif(bobuff)
     Bellah.sendMessage(m.chat,{video:bogif, gifPlayback:global.botname },{quoted: loli}).catch(err => {
    })
    break


     
        

                  

    //========================================================\\              
case 's': case 'sticker': case 'stiker': {
if (!quoted) return m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Bellah.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Bellah.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
    //========================================================\\              
                            //mode//
//========================================================\\ 
      case 'private': {
                if (!Owner) return reply(mess.owner)
                Bellah.public = false
                m.reply('*Successful in Changing To Self Usage*')
            }
            break
//========================================================\\               
              case 'public': {
                if (!Owner) return reply(mess.owner)
                Bellah.public = true
                m.reply('*Successful in Changing To Public Usage*')
            }
            break   
  //========================================================\\  
  //others 
case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Bellah.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Bellah.fetchStatus(who)
      reply(bio.status)
    } catch {
      return m.reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
  //========================================================\\  
                //tennor
            default:
                if (budy.startsWith('=>')) {
                    if (!Owner) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!Owner) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!Owner) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Bellah.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
          console.log(util.format(err))
        let e = String(err)
console.log({ text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true    

}})
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
} 
    