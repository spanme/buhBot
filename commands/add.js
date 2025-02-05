"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const wokcommands_1 = require("wokcommands");
const { ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    description: "Adds numbers", // Needed for slash command
    type: wokcommands_1.CommandType.BOTH, // Creates both legacy and slash command
    aliases: ['a'], //allows a diff way of calling command, via legacy
    reply: false, //whether to discord reply or not
    testOnly: true, // to only work in specified test servers
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
        perUserPerGuild: "10 s", //10 seconds
        //All users in the guild
        perGuild: "10 h", //10 house
        //all users all guilds
        global: "1 d", //1 day
    },
    deferReply: false,
    //deferReply: true,
    //deferReply: "ephemeral"
    init: (client, instance) => __awaiter(void 0, void 0, void 0, function* () { }), //something about database or something
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
    autocomplete: (command, argument, instance) => __awaiter(void 0, void 0, void 0, function* () {
        return ["options", "here"];
    }),
    callback: ({ client, instance, message, interaction, args, text, guild, member, user, channel, cancelCooldown, updateCooldown }) => {
        let sum = 0;
        for (let arg of args) {
            sum += parseInt(arg);
        }
        return {
            content: `The sum is ${sum}`
        };
    }
};
