import WOK, { CommandType } from 'wokcommands';
import { Client, Message, CommandInteraction, Guild, GuildMember, User, TextChannel } from 'discord.js';
const { ApplicationCommandOptionType } = require('discord.js');
import {AutocompleteInteraction} from "discord.js";

module.exports = {
    description: "Adds numbers", // Needed for slash command
    type: CommandType.BOTH, // Creates both legacy and slash command

    aliases: ['a'], //allows a diff way of calling command, via legacy
    reply: false, //whether to discord reply or not

    testOnly: true,// to only work in specified test servers
    guildOnly: true, //useable in servers only
    // ownerOnly: true, only whitelisted devs including myself can use this command
    minArgs: 2, //default = 0, but we want 2 to add.
    maxArgs: 2, //default = -1, infinite, we want 2.
    expectedArgs: "<num1> <num2>", //when the user inputs invalid number of args this and next give output for help

    correctSyntax: "Correct usage: {PREFIX}{COMMAND} {ARGS}", //should look like !add <num1> <num2>

    requiredPermissions: ["Administrator"],

    cooldown: {
        errorMessage: "Please wait {TIME}",
        //specific user anywhere
        perUser: 10, //10 seconds
        //specific user per guild
        perUserPerGuild: "10 s",//10 seconds
        //All users in the guild
        perGuild: "10 h", //10 house
        //all users all guilds
        global: "1 d", //1 day
    },

    deferReply: false,
    //deferReply: true,
    //deferReply: "ephemeral"

    init: async (client: Client, instance: WOK) => {}, //something about database or something
    options: [
        {
            name: "num1",
            description: "num1",
            required: true,
            type: ApplicationCommandOptionType.Number,
        },
        {
            name: "num2",
            description: "num2",
            required: true,
            type: ApplicationCommandOptionType.Number,
        },
    ], //allegedly, this whole options thing gets autofilled in thsi way under the hood with the expectedArgs, minArgs
    //unless of course you write this stuff

    autocomplete: async (command: string, argument:string, instance:WOK) => {
      return["options", "here"];
    },

    callback: ({
                   client,
                   instance,
                   message,
                   interaction,
                   args,
                   text,
                   guild,
                   member,
                   user,
                   channel,
                   cancelCooldown,
                   updateCooldown
               }: {
        client: Client;
        instance: any; // `instance` type isn't well-documented, so use `any`
        message?: Message; // Message is only available for legacy commands
        interaction?: CommandInteraction; // Available for slash commands
        args: string[];
        text: string;
        guild?: Guild;
        member?: GuildMember;
        user?: User;
        channel?: TextChannel;
        cancelCooldown: () => void;
        updateCooldown: () => void;
    }) => {
        let sum = 0;

        for (let arg of args) {
            sum += parseInt(arg);
        }

        return {
            content: `The sum is ${sum}`
        };
    }
};
