//An joke you recieve from the bot whenever you are down.

module.exports = async function(tag, guild, channel) {

  try {
    const discord = require('discord.js'),
    time = new Date();

    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Encourage command success\n`);
   
    const jokes = [
      "My fear of moving stairs is escalating",
      "If nothing was learned, nothing was taught",
      "Velcro – what a rip-off!",
      "Change is inevitable – except from a vending machine.",
      "If you are here – who is running hell?",
      "Inspecting mirrors is a job I could really see myself doing",
      "Nothing tops a plain pizza."
    ];
    const rnd = Math.floor(Math.random() * messages.length);
    channel.send(jokes[rnd]);
    channel.send('I hope this lifts up your spirit!');
    return;
  } catch {
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Jokes command fail\n`);
    channel.send('*Feelings trips over taking the jokes command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
    return;
  }
}


