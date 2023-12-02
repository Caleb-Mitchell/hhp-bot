// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// client.on('message', (message) => {
//   if (message.channel.name === 'inquiry-emails') {
//     console.log(`Received message in the inquiry-emails channel: ${message.content}`);
//     message.channel.send('<@&1180254027364175993>');
//   }
// });

client.on('messageCreate', async (message) => {
  // if (message.channel.name === 'inquiry-emails') {
  // if (message.channelId === '1180237570261667911') {
    console.log(`Received message in the inquiry-emails channel: ${message.content}`);
    message.channel.send('<@&1180254027364175993>');
  // }
});


// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);
