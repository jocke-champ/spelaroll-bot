module.exports = {
    name: 'tabort',
    description: 'tar bort x antal meddelanden',
    execute(msg, args){
        var antal = parseInt(args[0]) + 1;

        if(isNaN(antal)){
            return msg.channel.send('Inte ett giltigt tal.');
        } else if (antal <= 1 || antal > 100){
            return msg.channel.send('Du måste skriva in ett tal som är mellan 1 och 99.');
        } 

        msg.channel.bulkDelete(antal, true).catch(err => {
            console.error(err);
            msg.channel.send('Det blev ett fel när jag skulle ta bort meddelanden!');
        });
    }
}