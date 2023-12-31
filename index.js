// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.channel.name === "inquiry-emails") {
    if (message.author.id !== client.user.id) {
      console.log(`Received message in the inquiry-emails channel`);
      // Mention the 'admin' role in the message
      const adminRole = message.guild.roles.cache.find(
        (role) => role.name === "admin"
      );

      if (adminRole) {
        message.channel.send(`<@&${adminRole.id}>`);
      } else {
        console.error('The "admin" role was not found in the server.');
      }
    }
  }
});

// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);
