module.exports = (client) => {
    client.on('messageCreate', (message) => {
        // Ignore messages from bots
        if (message.author.bot) return;

        // Log the message content to the console (you can modify this to log elsewhere if needed)
        console.log(`[Message Received] ${message.author.tag}: ${message.content}`);
    });
};