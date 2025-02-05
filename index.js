//import DiscordJS, {GatewayIntentBits, chatInputApplicationCommandMention, ChatInputCommandInteraction} from 'discord.js'
import { Client, IntentsBitField, Partials } from "discord.js";
import WOK from "wokcommands";
import path from 'path';
require("dotenv/config");
//npm run tsc for java compilation program
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    partials: [Partials.Channel]
});
client.on('ready', () => {
    console.log('Ready!!!');
    new WOK({
        client,
        commandsDir: path.join(__dirname, 'commands'),
        //botOwners: [id1, id2] this allows these people to run ownerOnly commands.
        testServers: ["1288246824406224989"], //these commands work on these servers.
        validations: {
            runtime: path.join(__dirname, 'validations', "runtime"),
            syntax: path.join(__dirname, 'validations', "syntax"),
        },
        events: {
            dir: path.join(__dirname, "events"),
            messageCreate: {
                isHuman: (message) => !message.author.bot,
            }
        },
        featuresDir: path.join(__dirname, 'features'),
        cooldownConfig: {
            //generic cooldown
            errorMessage: "Please wait {TIME} before doing that again.",
            botOwnersBypass: false,
            dbRequired: 300, //number of seconds for something??
        }
    });
});
client.login(process.env.TOKEN); //who knows what this does, maybe does exactly what it says.
