import DiscordJS, {GatewayIntentBits} from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('ready', () => {
    console.log('Ready!!!')
})

client.on('messageCreate', (message) => {
    if (message.content === 'buh') {
        message.reply({
        })
    }
})

client.login(process.env.TOKEN)




