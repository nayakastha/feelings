require('dotenv').config()
const { Client, Intents } = require('discord.js'),
 config = require('./metadata/config.json');
const botBE = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

//Importing the discord library and meta data and initialising a botBE
const admin = require('./commands/admin.js');

    
// ready for use after the bot is logged in  
botBE.on('ready', function() {
    console.log('\x1b[36m%s\x1b[0m', `Feelings has logged in`);
    console.log('\x1b[36m%s\x1b[0m', `Feellings has connected to ${botBE.guilds.size} guilds with ${botBE.users.size} users`);
    botBE.user.setActivity('/help for help || Everything is going to be okay, I promise <3');
  });

botBE.on('message', async function (msg) {
    //Ignores all messages not starting with the prefix and by the bot himself
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
  
});