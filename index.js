const Discord = require('discord.js');
const bot = new Discord.Client(); //botm för bot message
const { prefix, token } = require('./config.json');
// när botten är redo så loggar den det
bot.once('ready', () => {
    console.log('Redo!');
});



bot.on('message', (msg) => {
    //msg.channel.bulkDelete(antal, true); 
    //if (!message.content.startsWith(prefix) || message.author.bot) return;
    //const args = message.content.slice(prefix.length).trim().split(' ');
    //const command = args.shift().toLowerCase();

    /*if(msg.content == ('tack')) {
        msg.channel.send('Nej, jag är bäst!');
    }
    if(msg.content == ('jag är bäst')) {
        msg.channel.send('Nej, jag är bäst!');
    }
    if(msg.content == 'tik') {
        msg.channel.send('tok');
    }
    */
    if(msg.content.startsWith((`${prefix}Karaktär`) && (`${prefix}karaktär`))){
        text = msg.content.slice(prefix.length).trim().split(' ');
        for(var i = 1; i < text.length; i++){
            msg.channel.send('\n' + text[i]);
        }
    }
    
});

//Loggar in på Discord med app token som ligger i config.json
bot.login(token);