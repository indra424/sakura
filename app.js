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
var que = [
    process.env.P_1,
    process.env.P_2,
    process.env.P_3,
    process.env.P_4,
    process.env.P_5,
    process.env.P_6,
    process.env.P_7,
    process.env.P_8
    ];
var ans = [
    process.env.J_1,
    process.env.J_2,
    process.env.J_3,
    process.env.J_4,
    process.env.J_5,
    process.env.J_6,
    process.env.J_7,
    process.env.J_8
    ];

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
    client.user.setActivity(`EXORUN `);
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
        message.reply(waktu.toUTCString());
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
    
    //check user mute bot? if true not response that user.
    if (search(message.author.id, arrMuteBot, false)) return;

    if (message.content == '!mute') {
        if (search(message.author.id, arrMuteBot, false)) return;
        arrMuteBot.push(message.author.id);
        message.reply('Aku Diam Aja Deh....');
    } else if (message.content != '!mute' && message.content != '!unmute' && message.content != que[0] && message.content != que[1] && message.content != que[2] && message.content != que[3] && message.content != que[4] && message.content != que[5] && message.content != que[6] && message.content != que ) {
        simsimi.listen(message.content, function (err, msg) {
            if (err) return console.error(err);
            console.log('simsimi say : ', msg)
            message.reply(msg);
        });
    }
});

client.login(token);
