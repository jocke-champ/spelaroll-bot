const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json'); //can add token
//const token = process.env.BOT_TOKEN;
const bot = new Discord.Client(); //bot för bot message
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

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

    const args = msg.content.slice(prefix.length).trim().split(' ');
    const kommandoNamn = args.shift().toLocaleLowerCase();

    if(!bot.commands.has(kommandoNamn)) return;

    const kommando = bot.commands.get(kommandoNamn);

    try {
        kommando.execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.channel.send('Det blev fel när kommandot kördes.');
    }
});

//Loggar in på Discord med app token som ligger i config.json
//bot.login(token);
//bot.login(process.env.token);
bot.login(token).catch(err => console.log(err));