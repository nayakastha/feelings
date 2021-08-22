//A counting exercise
module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js');    
      
      console.log('\x1b[32m%s\x1b[0m', `${guild}:\n${tag} Breathe command success\n`);
      
        const embed = new discord.MessageEmbed()
          .setColor(0xFFB200)
          .setTimestamp()
          .setFooter('Count Command')
          .setTitle('Count your stress out!')
          .setDescription('Count along with the gif. Focusing on counting brings your attention away from whatever currently stresses you.\nI hope this helps you Breathe Easy')
          .setImage('https://media.giphy.com/media/krP2NRkLqnKEg/giphy.gif');
          
        channel.send(embed);
  
     
      console.log('\x1b[32m%s\x1b[0m', `${guild}:\n${tag} Count command success\n`)
      return;
    } catch {
      channel.send('*Breathe Easy drops her count command and it shatters*\n\nUh oh! I\'m so sorry i dropped this command! Please try again');
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Count command fail\n`);
      return;
    }
  }
  