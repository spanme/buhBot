"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import DiscordJS, {GatewayIntentBits, chatInputApplicationCommandMention, ChatInputCommandInteraction} from 'discord.js'
const discord_js_1 = require("discord.js");
const wokcommands_1 = __importDefault(require("wokcommands"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
//npm run tsc for java compilation program
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.IntentsBitField.Flags.Guilds,
        discord_js_1.IntentsBitField.Flags.GuildMessages,
        discord_js_1.IntentsBitField.Flags.DirectMessages,
        discord_js_1.IntentsBitField.Flags.MessageContent,
    ],
    partials: [discord_js_1.Partials.Channel]
});
client.on('ready', () => {
    console.log('Ready!!!');
    new wokcommands_1.default({
        client,
        commandsDir: path_1.default.join(__dirname, 'commands'),
        //botOwners: [id1, id2] this allows these people to run ownerOnly commands.
        //testServers: [id1, id2], these commands work on these servers.
        validations: {
            runtime: path_1.default.join(__dirname, 'validations', "runtime"),
            syntax: path_1.default.join(__dirname, 'validations', "syntax"),
        },
        events: {
            dir: path_1.default.join(__dirname, "events"),
            messageCreate: {
                isHuman: (message) => !message.author.bot,
            }
        },
        featuresDir: path_1.default.join(__dirname, 'features'),
        cooldownConfig: {
            //generic cooldown
            errorMessage: "Please wait {TIME} before doing that again.",
            botOwnersBypass: false,
            dbRequired: 300, //number of seconds for something??
        }
    });
});
client.login(process.env.TOKEN); //who knows what this does, maybe does exactly what it says.
