const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.login(MzgyMTc0MzQzODQ2NjkwODE4.DPR6cA.K5sc9krZXFwP8-Q_z4RUzwEwbLc );
