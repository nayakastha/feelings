//A rich embed creator for my reddit commands

module.exports = function(title, author, image, subreddit) {

    if (title.includes('passed') || title.includes('Passed') || title.includes('pass') || title.includes('Pass') || title.includes('RIP') || title.includes('rip') || title.includes('died')) {
      console.log(title);
      throw new Error(filter)
    }
    try {
      const discord = require('discord.js'),
        block = new discord.RichEmbed();
      //Importing discord.js and initialising a new block
  
      block.setTitle(title);
      block.addField('Post author', author);
      block.setImage(image);
      block.setColor(0xc0392b);
      block.setFooter(`Post provided by ${subreddit}`);
      return(block);
      //returns the block
    } catch (filter) {
      return ('I wasn\'t able to provide a post from that subreddit however you can still see a kitten!', {
        files: ['./Misc/KittenMouse.gif']
      });
      console.log('\x1b[31m%s\x1b[0m', `${guild}:${tag} Reddit command fail block maker`);
    }
  }
  