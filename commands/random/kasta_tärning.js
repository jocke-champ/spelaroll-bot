const commando = require('discord.js-commando');

class KastaTarningKommando extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kasta',
            group: 'random',
            memberName: 'kasta',
            description: 'Kastar en tärning'
        });

    }

    async run(message, args) {
        var kasta = Math.floor(Math.random() * 6) + 1;
        message.reply("Du slog en " + kasta +":a");
    }
}

module.exports = KastaTarningKommando;