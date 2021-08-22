//A breathing technique to help calm people and help guide them in box breathing

module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js');       

      console.log('\x1b[32m%s\x1b[0m', `\n${guild}:\n${tag} Breathe command success\n`);
      
      const embed = new discord.MessageEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .setFooter('Breathe Command')
        .setTitle('Breathe it out!')
        .setDescription('This gif is demonstrating \'Box Breathing\' this is a method of breathing used to keep composure in extremely stressful situations by bringing calm and a feeling of control. Following this gif should help relax and sooth you when you feel overwhelmed and out of control.\nI hope this helps you')
        .setImage('https://media.giphy.com/media/yB6790TTGcbBNHCR3t/giphy.gif');
        
      channel.send(embed);
      
      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Breathe command fail\n`);
      channel.send('*Feelings trips over taking the breath command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
      return;
    }
  }
