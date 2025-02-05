import { CommandObject, CommandType } from 'wokcommands'
module.exports = {
    description: "Ping pong command", //need for slash command
    type: CommandType.BOTH, //creates legacy and slash command
    testOnly: true,
    callback: ({ message }) => { //invoked when user calls ping
        message?.reply("pong")
    }
} as CommandObject