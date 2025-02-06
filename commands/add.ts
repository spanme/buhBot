import { CommandInteraction } from "discord.js";

module.exports = {
    name: "add", // The name of the command
    description: "Add two numbers", // Description for the command
    async execute(interaction: CommandInteraction) {
        const args = interaction.options.data;
        const num1 = parseFloat(args[0]?.value as string);
        const num2 = parseFloat(args[1]?.value as string);

        if (!isNaN(num1) && !isNaN(num2)) {
            await interaction.reply(`The sum is: ${num1 + num2}`);
        } else {
            await interaction.reply("Please provide valid numbers.");
        }
    },
};
