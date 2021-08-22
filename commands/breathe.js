//A breathing technique to help calm people and help guide them in box breathing

module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js'),
       time = new Date();

      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Breathe command success\n`);
      // channel.send('hello this is the breathe command');
      channel.send('This gif is demonstrating \'Box Breathing\' this is a method of breathing used to keep composure in extremely stressful situations by bringing calm and a feeling of control. Following this gif should help relax and sooth you when you feel overwhelmed and out of control.\nI hope this helps you', {
        files: ['../assets/box.gif'] //This is the link to the gif
      });
      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Breathe command fail\n`);
      channel.send('*Feelings trips over taking the breath command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
      return;
    }
  }
