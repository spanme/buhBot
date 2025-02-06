// features/messageListener.ts
import { Client, Message } from "discord.js";

export default (client: Client) => {
    client.on("messageCreate", (message: Message) => {
        if (message.author.bot) return; // Ignore bot messages

        const content = message.content.toLowerCase();

        // Responding to "buh", "alex", "sean", and "kissy" (you can expand this logic as needed)
        if (content.includes("buh")) {
            message.reply("kissy");
        } else if (content.includes("alex")) {
            message.reply("bunwife");
        } else if (content.includes("sean")) {
            message.reply("husbun");
        } else if (content.includes("kissy")) {
            message.reply("buh");
        }
    });
};
