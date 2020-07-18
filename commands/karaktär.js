const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
    name: 'karaktär',
    description: 'Sparar en karaktär i ett specifikt text-dokument',
    execute(msg, args) {
        var namn = args[0]; //namn blir andra elementet i arrayen (namnet)
        var dndtext = ['Spelare:', 'Spel: ', 'Namn: ', 'Ras: ', 'Ålder: ' ];
        var logger = fs.createWriteStream(namn + '.txt', { 
            flags: 'a'
        });
        for(var i = 0; i < args.length; i++){ // for-loop som tar sig igenom arrayen som skapades i rad 30
            var fileContent = '\n' + dndtext[i] + args[i]; // eftersom text[0] är 'karaktärer' så startar arrayen 'text' med [1], men dndtext startar med i-1 = 0 vid start
            msg.channel.send(fileContent);
            logger.write(fileContent); //startar write-funktioner ur logger, vilket startar en writestream som tilåter texten i for-loopen att skrivas
            
        }
        const file = new Discord.MessageAttachment(namn +'.txt'); // skapar ett 'attachment' med namnet på personen  [1]
        const Embed = {
            title: namn + 's fil'
        };
        msg.channel.send({files: [file], embed: Embed}); // skickar 'attachment' och 'Embed' till discord-kanalen som anropade
    
    }
}