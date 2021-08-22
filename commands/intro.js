module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js'),
        time = new Date();
     
  
      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} intro command success\n`);
      // channel.send('hello this is the intro command');
      channel.send('While you maybe unaware of the unwelcomed visitors in your head, I’m well aware of each of them, and I have a technique of how you can deal with them. Hello, my name is Feelings and I am here to help ease your fantod!', {
        files: ['../assets/intro.gif'] //This is the link to the gif
      });
      return;
    } 
    catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} intro command failed\n`);
      channel.send('*Oops! Seems like you failed to connect to Feelings*\n Please try again');
      return;
    }
  }
  