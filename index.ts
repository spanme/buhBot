import DiscordJS, {GatewayIntentBits, chatInputApplicationCommandMention, ChatInputCommandInteraction} from 'discord.js'
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
        name: 'bunhouse',
        description: 'the future'
    })
    const { ApplicationCommandOptionType } = require('discord.js');
    commands?.create({
        name: 'add',
        description: 'Adds two numbers',

        options: [
            {
                name: 'num1',
                description: 'The first number',
                required: true,
                type: ApplicationCommandOptionType.Number,
            },
            {
                name: 'num2',
                description: 'The second number',
                required: true,
                type: ApplicationCommandOptionType.Number,
            }
        ]
    })

})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }
    const { commandName, options } = interaction;
    const i = interaction as ChatInputCommandInteraction;


    if (commandName === "bunhouse") {
        i.reply({
            content: 'soon',
            //ephemeral: true, for user only messages
        })
    } else if (commandName === "add") {
        const num1 = i.options.getNumber('num1')!
        const num2 = i.options.getNumber('num2')!

        interaction.reply(
            {
                content: `The sum is: ${num1 + num2}`,
            }
        )
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






