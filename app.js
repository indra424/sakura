const Discord = require('discord.js');
const client = new Discord.Client();
const Simsimi = require('simsimi');
const {
    token,
    channelChatbotId,
} = require('./config.json');

var simsimi = new Simsimi({
        lc : process.env.LC_SIMI,
        ft : process.env.FT_SIMI,
        key: process.env.KEY_SIMI
    });
var waktu = new Date();
var jam = waktu.getHours();
var que = [
    process.env.P_1,
    process.env.P_2,
    process.env.P_3,
    process.env.P_4,
    process.env.P_5,
    process.env.P_6,
    process.env.P_7,
    process.env.P_8,
    process.env.P_9,
    process.env.P_10,
    process.env.P_11,
    process.env.P_12,
    process.env.P_13,
    process.env.P_14,
    process.env.P_15,
    process.env.P_16,
    process.env.P_17,
    process.env.P_18,
    process.env.P_19,
    process.env.P_20,
    process.env.P_21,
    process.env.P_22,
    process.env.P_23,
    process.env.P_24,
    process.env.P_25,
    process.env.P_26,
    process.env.P_27,
    process.env.P_28,
    process.env.P_29,
    process.env.P_30,
    process.env.P_31
    ];
var ans = [
    process.env.J_1,
    process.env.J_2,
    process.env.J_3,
    process.env.J_4,
    process.env.J_5,
    process.env.J_6,
    process.env.J_7,
    process.env.J_8,
    process.env.J_9,
    process.env.J_10,
    process.env.J_11,
    process.env.J_12,
    process.env.J_13,
    process.env.J_14,
    process.env.J_15,
    process.env.J_16,
    process.env.J_17,
    process.env.J_18,
    process.env.J_19,
    process.env.J_20,
    process.env.J_21,
    process.env.J_22,
    process.env.J_23,
    process.env.J_24,
    process.env.J_25,
    process.env.J_26,
    process.env.J_27,
    process.env.J_28,
    process.env.J_29,
    process.env.J_30,
    process.env.J_31
    ];
//pesan terjadwal
client.on('message'),function (message) {
    if (jam == '4'){
    var pesan = client.channels.get(channelChatbotId);
    pesan.sendMessage('selamat siang hijra');
    }
};
var arrMuteBot = [];
client.on('ready', function (message) {
    let today = new Date();
    let curHr = today.getHours();
    let greetMsg = "";

    if (curHr < 12) {
        greetMsg = 'Selamat Pagi';
    } else if (curHr < 18) {
        greetMsg = 'Selamat Siang';
    } else {
        greetMsg = 'Selamat Malam';
    }
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`HAGO `);
    //var channel = client.channels.get('466887450602504192');
    //channel.sendMessage('@everyone Lihat Profil ' + greetMsg + ':pray::skin-tone-3: :pray::skin-tone-3: :pray::skin-tone-3:')
    //channel.sendMessage('Jangan Main-Main' )
    //channel.sendMessage('Aku Tidak Tahu Apa Yg Harus Kulakukan..' )
});
function search(key, array, remove) {
    if (remove) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === key) {
                console.log('remove : ', arrMuteBot[i]);
                arrMuteBot.splice(i, 1);
                console.log('array  : ', arrMuteBot);
                //return array[i];
                return true;
            }
        }
        return false;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === key) {
                //return array[i];
                return true;
            }
        }
        return false;
    }

}

client.on('message', function (message) {
    if (message.author.bot) return;
    //private message to bot
    if (message.channel.type === 'dm') {
        if (message.content.indexOf('!msg') === 0) {
            let msg = message.content.split(' ');
            if (msg.length > 1) {
                var channel = client.channels.get(channelChatbotId);
                channel.sendMessage(msg[1]);
            }
        }
        return;
    }
    if (message.channel.id != channelChatbotId) return;

    if (message.content == '!unmute') {
        if (search(message.author.id, arrMuteBot, true)) {
            message.reply('Aku Merindukanmu');
        } else {
            return console.log('user not found : ', message.author.id);
        }

    }
    //jawaban khusus
    if (message.content == 'Jam berapa sekarang?')
        message.reply(jam);
    if (message.content == que[0])
        message.reply(ans[0]);
    if (message.content == que[1])
        message.reply(ans[1]);
    if (message.content == que[2])
        message.reply(ans[2]);
    if (message.content == que[3])
        message.reply(ans[3]);
    if (message.content == que[4])
        message.reply(ans[4]);
    if (message.content == que[5])
        message.reply(ans[5]);
    if (message.content == que[6])
        message.reply(ans[6]);
    if (message.content == que[7])
        message.reply(ans[7]);
    if (message.content == que[8])
        message.reply(ans[8]);
    if (message.content == que[9])
        message.reply(ans[9]);
    if (message.content == que[10])
        message.reply(ans[10]);
    if (message.content == que[11])
        message.reply(ans[11]);
    if (message.content == que[12])
        message.reply(ans[12]);
    if (message.content == que[13])
        message.reply(ans[13]);
    if (message.content == que[14])
        message.reply(ans[14]);
    if (message.content == que[15])
        message.reply(ans[15]);
    if (message.content == que[16])
        message.reply(ans[16]);
    if (message.content == que[17])
        message.reply(ans[17]);
    if (message.content == que[18])
        message.reply(ans[18]);
    if (message.content == que[19])
        message.reply(ans[19]);
    if (message.content == que[20])
        message.reply(ans[20]);
    if (message.content == que[21])
        message.reply(ans[21]);
    if (message.content == que[22])
        message.reply(ans[22]);
    if (message.content == que[23])
        message.reply(ans[23]);
    if (message.content == que[24])
        message.reply(ans[24]);
    if (message.content == que[25])
        message.reply(ans[25]);
    if (message.content == que[26])
        message.reply(ans[26]);
    if (message.content == que[27])
        message.reply(ans[27]);
    if (message.content == que[28])
        message.reply(ans[28]);
    if (message.content == que[29])
        message.reply(ans[29]);
    if (message.content == que[30])
        message.reply(ans[30]);
    if (message.content == que[31])
        message.reply(ans[31]);
    //check user mute bot? if true not response that user.
    if (search(message.author.id, arrMuteBot, false)) return;

    if (message.content == '!mute') {
        if (search(message.author.id, arrMuteBot, false)) return;
        arrMuteBot.push(message.author.id);
        message.reply('Aku Diam Aja Deh....');
    } else if (message.content != '!mute' 
              && message.content != '!unmute'
              && message.content != que[0] 
              && message.content != que[1] 
              && message.content != que[2] 
              && message.content != que[3] 
              && message.content != que[4] 
              && message.content != que[5] 
              && message.content != que[6] 
              && message.content != que[7]
              && message.content != que[8]
              && message.content != que[9] 
              && message.content != que[10] 
              && message.content != que[11] 
              && message.content != que[11] 
              && message.content != que[12] 
              && message.content != que[13] 
              && message.content != que[14]
              && message.content != que[15]
              && message.content != que[16]
              && message.content != que[17]
              && message.content != que[18] 
              && message.content != que[19]
              && message.content != que[20]
              && message.content != que[21]
              && message.content != que[22]
              && message.content != que[23] 
              && message.content != que[24]
              && message.content != que[25]
              && message.content != que[26]
              && message.content != que[27]
              && message.content != que[28] 
              && message.content != que[29]
              && message.content != que[30]
              && message.content != que[31]
              ) {
        simsimi.listen(message.content, function (err, msg) {
            if (err) return console.error(err);
            console.log('simsimi say : ', msg)
            message.reply(msg);
        });
    }
});

client.login(token);
