import { Client, IntentsBitField, Interaction } from "discord.js";
import dotenv from "dotenv";
import messageListener from "./features/messageListener"; // Import the message listener
import path from "path";
import fs from "fs";

dotenv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

// Dynamically load all command files from the 'commands' folder
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".ts"));

client.once("ready", () => {
    console.log("Bot is ready!");

    // Initialize the message listener (not related to commands)
    messageListener(client);

    // Register slash commands dynamically when bot is ready
    const commands = client.application?.commands;
    if (commands) {
        commandFiles.forEach((file) => {
            const command = require(path.join(commandsPath, file));
            if (command && command.name) {
                commands.create({
                    name: command.name,
                    description: command.description,
                });
            }
        });
    }
});

// Listen for slash command interactions
client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    const commandName = interaction.commandName;

    // Find the corresponding command file dynamically
    const commandFilePath = path.join(commandsPath, `${commandName}.ts`);

    if (fs.existsSync(commandFilePath)) {
        const command = require(commandFilePath);

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply("There was an error while executing this command!");
        }
    } else {
        await interaction.reply("Command not found.");
    }
});

client.login(process.env.TOKEN); // Login using the bot token
