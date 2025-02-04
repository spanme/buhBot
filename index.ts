import DiscordJS, {GatewayIntentBits} from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
//npm run tsc for java compilation program
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
    const content = message.content.toLowerCase()

    if (message.author.bot) return; //stops bot replying to itself

    if (content.includes('buh')) {
        message.reply({
            content: 'kissy',
        })
    }

    if (content.includes('alex')) {
        message.reply({
            content: 'bunwife',
        })
    }

    if (content.includes('sean')) {
        message.reply({
            content: 'husbun',
        })
    }

    if (content.includes('kissy')) {
        message.reply({
            content: 'buh',
        })
    }


})

client.login(process.env.TOKEN)




