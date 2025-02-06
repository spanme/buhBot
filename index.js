var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client, IntentsBitField } from "discord.js";
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
    var _a;
    console.log("Bot is ready!");
    // Initialize the message listener (not related to commands)
    messageListener(client);
    // Register slash commands dynamically when bot is ready
    const commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
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
client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isCommand())
        return;
    const commandName = interaction.commandName;
    // Find the corresponding command file dynamically
    const commandFilePath = path.join(commandsPath, `${commandName}.ts`);
    if (fs.existsSync(commandFilePath)) {
        const command = require(commandFilePath);
        try {
            yield command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            yield interaction.reply("There was an error while executing this command!");
        }
    }
    else {
        yield interaction.reply("Command not found.");
    }
}));
client.login(process.env.TOKEN); // Login using the bot token
