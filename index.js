require("dotenv").config();
const { Client, Intents } = require("discord.js"),
  config = require("./metadata/config.json");
const botBE = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

//Importing the discord library and meta data and initialising a botBE

const admin = require('./commands/admin.js'),
  breathe = require('./commands/breathe.js'),
  encourage = require('./commands/encourage.js'),
  count = require('./commands/count.js'),
  help = require('./commands/help.js'),
  hug = require('./commands/hug.js');


botBE.login(process.env.BOT_TOKEN);

// ready for use after the bot is logged in

botBE.on("ready", function () {
  console.log("\x1b[36m%s\x1b[0m", `Feelings has logged in`);
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Feelings has connected to ${botBE.guilds.size} guilds with ${botBE.users.size} users`
  );
  botBE.user.setActivity(
    "/help for help || Everything is going to be okay, I promise <3"
  );
});

botBE.on("message", async function (msg) {
  //Ignores all messages not starting with the prefix and by the bot himself
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  //declare's the args variable and command variable
  const args = msg.content.slice(config.prefix.length).split(" ");

  const command = args.shift().toLowerCase();

  switch (command) {
    case "welcome":
      intro(msg.author.tag, msg.guild.name, msg.channel);
      break;
    case "ping": //A simple ping command
      ping(botBE.ping, msg.author.tag, msg.guild, msg.channel);
      break;

    case 'help': //Sends a help block
      help(msg.author.tag, msg.guild, msg.channel);

      break;
    case "feedback": //Sends feedback to me via the bot
      // feedback(msg.content.slice(command.length + 1), msg.author.tag, msg.guild, msg.channel, botBE.guilds.get('560014471599489046').channels.get('627248802084159507'));
      break;
    case "admin": //Admin commands
      if (msg.author.id === process.env.ADMIN_ID) {
        admin(
          args[0],
          botBE,
          msg.author.tag,
          msg.guild,
          msg.channel,
          process.env.ADMIN_ID,
          botBE.guilds.size,
          botBE.users.size,
          msg.content.slice(command.length + 9)
        );
      } else {
        msg.channel.send("Only Wasteland can touch me there UwU");
        console.log(
          "\x1b[35m%s\x1b[0m",
          `${msg.guild}:${msg.author.tag} Admin command refuse`
        );
      }
      break;

    case "prompt": //Sends a visualtion prompt
      //prompt(args[0], msg.author.tag, msg.guild, msg.channel);
      break;
    case "request": //Allows users to send requests for prompts to me
      // request(msg.content.slice(command.length + 1), msg.author.tag, msg.guild, msg.channel, botBE.guilds.get('560014471599489046').channels.get('627342241253425153'));
      break;
    case "breathe":

      breathe(msg.author.tag, msg.guild, msg.channel);
      break;
    case "count": //Sends a counting exercise
      // count(msg.author.tag, msg.guild, msg.channel);
      break;

    case 'hug': //Sends a hug to people you mention
      hug(msg.mentions.members.first(), msg.author.tag, msg.guild, msg.author.username, msg.channel, botBE.user.id);
      break;
    case 'encouragement':
      encourage(msg.author.tag, msg.guild, msg.channel);

      break;
    case "reddit": //Sends cat images
      // reddit(args[0], msg.author.tag, msg.guild, msg.channel);
      break;
  }
  return;

});

botBE.on("guildCreate", async function (guild) {
  console.log("\x1b[36m%s\x1b[0m", `Breathe Easy has joined ${guild.name}`);
});


botBE.on('guildDelete', async function(guild) {
  console.log('\x1b[36m%s\x1b[0m', `Breathe Easy has left ${guild.name}`);
}); 

