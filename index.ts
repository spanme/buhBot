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

    const guildID = '1288246824406224989'
    const guild = client.guilds.cache.get(guildID)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'replies with pong.'
    })

})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }
    const { commandName, options } = interaction;

    if (commandName === "bunhouse") {
        interaction.reply({
            content: 'soon',
            //ephemeral: true, for user only messages
        })
    }
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






