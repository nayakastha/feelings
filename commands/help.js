//A block showing all the commands

module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js');   
 
      console.log('\x1b[32m%s\x1b[0m', `${guild}:\n${tag} Help command success\n`);
     
      const embed = new MessageEmbed()
        .setColor('#0099ff')        
        .setTitle('Feelings is a discord bot to help people to calm down and relax')
        .setFooter('Feelings')
        .setTimestamp()
        .setImage('https://github.com/nayakastha/feelings/blob/main/assets/feelings.png')
        .setDescrpition('Commands', 'Prefix /\nWelcome\nPing\nHelp\nFeedback\nAdmin\nCount\nBreathe\nHugn\nPat\nEncouragement\nLaugh\nReddit', true);
          
        
      console.log("works");
      channel.send({ embed });
      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${guild}:\n${tag} Help command fail\n`);
      channel.send('*Feelings trips over taking the help command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
      return;
    }
  }
