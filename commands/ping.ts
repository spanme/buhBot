import { CommandInteraction } from "discord.js";

module.exports = {
    name: "ping", // The name of the command (must match the slash command)
    description: "Ping pong command!", // Description for the command
    async execute(interaction: CommandInteraction) {
        await interaction.reply("Pong!");
    },
};
