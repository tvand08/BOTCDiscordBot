const { Client, Intents, MessageAttachment, Collection, Options, Sweepers } = require("discord.js");
const fs = require("fs");
const dotenv = require("dotenv").config();
const path = require('node:path');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  makeCache: Options.cacheWithLimits({
    MessageManager: 200   
  })
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
} 

client.on("ready", () => {
    console.log("ready")
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
	
  const { commandName, options } = interaction;

  const command = client.commands.get(commandName);


  try {
		await command.execute(interaction, options);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})

client.login(process.env.CLIENT_ID);

const activityOptions = [
''
]
