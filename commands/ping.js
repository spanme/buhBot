"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wokcommands_1 = require("wokcommands");
module.exports = {
    description: "Ping pong command", //need for slash command
    type: wokcommands_1.CommandType.BOTH, //creates legacy and slash command
    testOnly: true,
    callback: ({ message }) => {
        message === null || message === void 0 ? void 0 : message.reply("pong");
    }
};
