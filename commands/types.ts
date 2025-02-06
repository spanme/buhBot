// commands/types.ts
import { Message } from 'discord.js';

export interface CommandObject {
    description: string;
    type: "text" | "slash" | "both";  // Command type
    callback: ({ message }: { message: Message }) => void;  // Command callback
}
