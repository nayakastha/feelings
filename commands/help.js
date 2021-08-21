//A block showing all the commands

module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js'),
      time = new Date(),
      { MessageEmbed, MessageAttachment } = require('discord.js');

      const file = new MessageAttachment('../assets/feelings.png');

      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Help command success\n`);
      // channel.send('hello this is the help command');
      const help = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Feelings Bot')
          .setThumbnail('attachment://feelings.png')
          // .setAuthor('Feelings', 'attachment://feelings.png')
          .setaddField('Commands','Prefix /\nWelcome\nPing\nHelp\nFeedback\nAdmin\nCount\nBreathe\nHug\nEncouragement\nReddit', true)
          .addBlankField()
          .setaddField('Description', 'Feelings is a discord bot to help people to calm down and relax', true)
          .setFooter('Feelings', 'attachment://feelings.png');
      channel.send({ embeds: [help], files: [file] });
      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Help command fail\n`);
      channel.send('*Feelings trips over taking the help command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
      return;
    }
  }
