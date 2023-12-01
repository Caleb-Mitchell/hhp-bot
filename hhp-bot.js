const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.channel.name === 'inquiry-emails') {
    console.log(`Received message in the inquiry-emails channel: ${message.content}`);
    message.channel.send('<@&1180254027364175993>');
  }
});

// Log in to the Discord bot using the token
client.login(BOT_TOKEN);
