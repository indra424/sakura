const Discord = require('discord.js');
const client = new Discord.Client();
const Simsimi = require('simsimi');
const {
    token,
    channelChatbotId
} = require('./config.json');
const {
    P1,
    J1
} = require('./question.json');

var simsimi = new Simsimi({
        lc : process.env.LC_SIMI,
        ft : process.env.FT_SIMI,
        key: process.env.KEY_SIMI
    });

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
    if (message.content == 'siapa kamu?') {
            message.reply('aku Park Chanyeol');
        }
    //check user mute bot? if true not response that user.
    if (search(message.author.id, arrMuteBot, false)) return;

    if (message.content == '!mute') {
        if (search(message.author.id, arrMuteBot, false)) return;
        arrMuteBot.push(message.author.id);
        message.reply('Aku Diam Aja Deh....');
    } else if (message.content != '!mute' && message.content != '!unmute' && message.content != 'siapa kamu?') {
        simsimi.listen(message.content, function (err, msg) {
            if (err) return console.error(err);
            console.log('simsimi say : ', msg)
            message.reply(msg);
        });
    }
});

client.login(token);
