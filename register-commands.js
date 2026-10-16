
import { REST, Routes, SlashCommandBuilder } from "discord.js";
import "dotenv/config";

const commands = [
  new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Open the VEXORA ticket panel"),

  new SlashCommandBuilder()
    .setName("تذكرة")
    .setDescription("فتح لوحة تذاكر VEXORA")
].map(command => command.toJSON());

const rest = new REST({ version: "10" })
  .setToken(process.env.DISCORD_TOKEN);

try {
  await rest.put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
    ),
    { body: commands }
  );

  console.log("VEXORA commands registered successfully.");
} catch (error) {
  console.error("Failed to register commands:", error);
}
