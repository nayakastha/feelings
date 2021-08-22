module.exports = async function(botBE, tag, guild, channel) {

    try {
      const discord = require('discord.js'),
        time = new Date();
     
  
      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} intro command success\n`);
      // channel.send('hello this is the ping command');
      
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.sendMessage("Your ping is `" + `${ping}` + " ms`");
    
      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} intro command failed\n`);
      channel.send("Command failed.\nPlease check and retry.");
      return;
    }
  }
  