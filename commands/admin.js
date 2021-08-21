//Admin commands for Feelings

module.exports = async function(adCommand, botBE, tag, guild, guilds, channel, token, guildCount, userCount, msg) {
    try {
      const discord = require('discord.js'),
      time = new Date();
      //importing discord.js
  
      switch (adCommand) { //Runs through code based on the keyword inputted
        case 'reload':
          channel.send('Attempting reload...');
          botBE.destroy();
          botBE.login(token);
          channel.send('Successfully reloaded Feelings');
          console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Feelings reload success\n`);
          break;
        case 'guilds':
          channel.send(`Feelings is currently connected to ${guildCount} guilds`);
          console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Guild count success\n`);
          break;
        case 'guildlist':
          channel.send(`Feelings is connected to these guilds\n${guilds}`);
          console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Guild list success\n`);
          break;
        case 'users':
          channel.send(`Feelings is currently serving ${userCount} users`);
          console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} User count success\n`);
          break;
        case 'repeat':
          channel.send(msg);
          console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Repeat success\n`);
          break;
        default: //Sends a block with all the admin keywords
          const adCommandBlock = new discord.RichEmbed();
  
          adCommandBlock.setFooter('Feelings');
          adCommandBlock.addField('Command', '\n\nReload\n\nGuilds\n\nUsers', true);
          adCommandBlock.addField('Description', '\n\nReloads Feelings client\n\nSends guild count\n\nSends user count', true);
          adCommandBlock.setColor(0x660066);
          channel.send(adCommandBloc);
          console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Admin command block success\n`);
      }
      return;
    } catch {
      channel.send('I couldn\'t do that! I\'m sorry. don\'t punish me >:3');
      console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Admin command fail\n`);
      return;
    }
  }
  