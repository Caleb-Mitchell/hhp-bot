const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
  // Check if the message is in the specific channel you want to respond to
  if (message.channel.name === 'inquiry-emails') {
    // Send a mention to @admin
    message.channel.send('@admin');
  }
});

// Log in to the Discord bot using the token
client.login(BOT_TOKEN);
