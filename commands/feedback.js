//An export that will format feedback

module.exports = async function(feedback, tag, guild, channelFrom) {

    try {
      if (feedback) {
        const discord = require('discord.js'),
          feedbackBlock = new discord.MessageEmbed();
          
  
        feedbackBlock.setTitle(`Feedback from ${tag}`);
        feedbackBlock.setThumbnail(`https://i.imgur.com/HkRBcAV.png`);
        feedbackBlock.setColor(0x660066);
       
        channelFrom.send('I\'ll deliver this straight to Admins! *Feelings runs off with your letter*');
        channelTo.send({ feedbackBlock });
        
        console.log('\x1b[32m%s\x1b[0m', `${guild}:\n${tag} Feedback deliver success\n`);
        return;
      } else {
        throw error
      }
    } catch {
      channelFrom.send('*Feelings\'s face contorts in confusion when reading your letter*\n\nI\'m sorry i can\'t understand this. Please format your feedback \"/feedback found a spelling mistake in prompt the Valley\"');
      console.log('\x1b[31m%s\x1b[0m', `${guild}:\n${tag} Feedback deliver fail\n`);
      return;
    }
  }