//A hug commands sends a heart/hug gif to the mentioned person

module.exports = async function(mention, tag, guild, username, channel, userID) {

    try {
      const discord = require('discord.js'),
        time = new Date();
      const hugs = [
        '../assets/Hugs_1.gif',
        '../assets/Hugs_2.gif',
        '../assets/Hugs_3.gif',
        '../assets/Hugs_4.gif',
        '../assets/Hugs_5.gif',
        '../assets/Hugs_6.gif'
      ];
      const rnd = Math.floor(Math.random() * hugs.length);

      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Hug command success\n`);
      // channel.send('hello this is the hug command');
      channel.send(`${username} has sent a hug to ${mention}`, {
        files: [hugs[rnd]]
      });

      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Hug command fail\n`);
      channel.send('*Feelings trips over taking the hug command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
      return;
    }
  }
