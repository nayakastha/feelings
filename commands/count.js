//A counting exercise
module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js'),
        time = new Date();
      //Importing discord.js
  
      channel.send('Count along with Finn trying to write on Jake. Focusing on counting brings your attention away from whatever currently stresses you.\nI hope this helps you Breathe Easy', {
        files: ['../assets/count.gif']
      });
      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Count command success\n`)
      return;
    } catch {
      channel.send('*Breathe Easy drops her count command and it shatters*\n\nUh oh! I\'m so sorry i dropped this command! Please try again');
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Count command fail\n`);
      return;
    }
  }
  