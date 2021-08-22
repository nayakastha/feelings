const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();


const jokes = [
    "My fear of moving stairs is escalating",
    "If nothing was learned, nothing was taught",
    "Velcro – what a rip-off!",
    "Change is inevitable – except from a vending machine.",
    "If you are here – who is running hell?",
    "Inspecting mirrors is a job I could really see myself doing",
    "Nothing tops a plain pizza."
  ];


client.on('jokes', (msg) => {
  if (msg.content === '!joke')
    msg.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    
  if (msg.content === '!mod') {
    msg.member.roles.add('878570780466761728');
    msg.react('?');
    msg.reply('You are a MOD now');
  }
});

client.login(process.env.BOT_TOKEN);


