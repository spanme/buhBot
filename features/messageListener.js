export default (client) => {
    client.on("messageCreate", (message) => {
        if (message.author.bot)
            return; // Ignore bot messages
        const content = message.content.toLowerCase();
        // Responding to "buh", "alex", "sean", and "kissy" (you can expand this logic as needed)
        if (content.includes("buh")) {
            message.reply("kissy");
        }
        else if (content.includes("alex")) {
            message.reply("bunwife");
        }
        else if (content.includes("sean")) {
            message.reply("husbun");
        }
        else if (content.includes("kissy")) {
            message.reply("buh");
        }
    });
};
