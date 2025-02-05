"use strict";
// features/messageListener.ts
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (client, instance) => {
    client.on('messageCreate', (message) => {
        if (message.author.bot)
            return; // Don't let the bot reply to itself
        const content = message.content.toLowerCase();
        if (content.includes('buh')) {
            message.reply({
                content: 'kissy',
            });
        }
        if (content.includes('alex')) {
            message.reply({
                content: 'bunwife',
            });
        }
        if (content.includes('sean')) {
            message.reply({
                content: 'husbun',
            });
        }
        if (content.includes('kissy')) {
            message.reply({
                content: 'buh',
            });
        }
    });
};
