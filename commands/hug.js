//A command to hug someone mentioned

module.exports = async function(mention, tag, guild, username, channel, breatheID) {

  try { //Sends a random hug gif if someone has been mentioned
    if (mention !== undefined) {
      const discord = require('discord.js'),
        hugs = ['https://media.giphy.com/media/3oEdv4hwWTzBhWvaU0/giphy.gif',
          'https://media.giphy.com/media/AoT3UZW99njkW9JRov/giphy.gif',
          'https://media.giphy.com/media/gHKnFHkGPUmG4GTzUt/giphy.gif',
          'https://media.giphy.com/media/jok6RFsy9M11AAcB4w/giphy.gif',
          'https://media.giphy.com/media/yPjxAzSkVFgZO/giphy.gif',
         ];


      channel.send(`${username} has hugged ${mention}`, {
        files: [hugs[Math.floor(Math.random() * hugs.length)]]
      });
      console.log('\x1b[32m%s\x1b[0m', `${guild}:\n${tag} & ${mention} Hug command success\n`);
    } else {
      throw error
    }
    return;
  } catch {
    channel.send(`*Breathe Easy looks at you with confusion*\n\nI\'m really sorry i\'m having trouble understanding you. Please follow hug with a mention, For example \"/hug <@${breatheID}>\"`);
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Hug command fail\n`);
    return;
  }
}
