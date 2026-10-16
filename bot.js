
import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once("ready", () => {
  console.log(`VEXORA is online as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ticket") {
    await interaction.reply({
      content: "🎫 نظام التذاكر في VEXORA قيد التجهيز!",
      ephemeral: true
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
