const Discord = require('discord.js');
const bot = new Discord.Client(); //botm för bot message
const { prefix, token } = require('./config.json');
var fs = require('fs');

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
    if(msg.content.startsWith((`${prefix}Karaktär`) && (`${prefix}karaktär`))){ //Letar efter '!'karaktärer
        var text = msg.content.slice(prefix.length).trim().split(' '); // text blir en array meningen som skrevs, tar bort '!'.
        var namn = text[1]; //namn blir andra elementet i arrayen (namnet)
        var dndtext = ['Spelare:', 'Spel: ', 'Namn: ', 'Ras: ', 'Ålder: ' ];
        var logger = fs.createWriteStream(namn + '.txt', { 
            flags: 'a'
        });
        for(var i = 1; i < text.length; i++){ // for-loop som tar sig igenom arrayen som skapades i rad 30
            var fileContent = '\n' + dndtext[i-1] + text[i]; // eftersom text[0] är 'karaktärer' så startar arrayen 'text' med [1], men dndtext startar med i-1 = 0 vid start
            msg.channel.send(fileContent);
            logger.write(fileContent); //startar write-funktioner ur logger, vilket startar en writestream som tilåter texten i for-loopen att skrivas
            
        }
        const file = new Discord.MessageAttachment(namn +'.txt'); // skapar ett 'attachment' med namnet på personen  [1]
        const Embed = {
            title: namn + 's fil'
        };
        msg.channel.send({files: [file], embed: Embed}); // skickar 'attachment' och 'Embed' till discord-kanalen som anropade
    }
    
});

//Loggar in på Discord med app token som ligger i config.json
bot.login(token);