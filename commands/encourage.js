//An encouragement you recieve from the bot whenever you are down.

module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js'),
      time = new Date();

      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Encourage command success\n`);
      // channel.send('hello this is the encouragement command');
      const messages = [
         'You are a blooming flower',
         'When times are tough, never stop',
         'You are the most loved and appreciated person in this world',
        ];
      const rnd = Math.floor(Math.random() * messages.length);
      channel.send(messages[rnd]);
      channel.send('I hope this lifts up your spirit!');
      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Encourage command fail\n`);
      channel.send('*Feelings trips over taking the encourage command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
      return;
    }
  }
