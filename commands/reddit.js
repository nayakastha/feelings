//Sends a random post from a cat subreddit

module.exports = async function(sub, tag, guild, channel) {

    try {
      const discord = require('discord.js'),
        axios = require('axios'),
        blockMaker = require('../Utils/BreatheEasy_BlockMaker.js'),
        time = new Date();
      //importing libraries
  
      let redLink,
        post,
        randomNumber;
      //initialising empty variables
  
      switch (sub) { //Get's a random post from a subreddit and sets it's attributes to the block
        case 'cats':
        case 'cat':
          redLink = await axios.get(`https://www.reddit.com/r/cats/top.json?t=all&limit=1000`);
          posts = redLink.data.data.children;
          randomNumber = Math.floor(Math.random() * posts.length);
  
          channel.send(blockMaker(posts[randomNumber].data.title, posts[randomNumber].data.author, posts[randomNumber].data.url, 'r/cats'));
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success ${sub}\n`);
          break;
        case 'kittens':
        case 'kitten':
          redLink = await axios.get(`https://www.reddit.com/r/kittens/top.json?t=all&limit=1000`);
          posts = redLink.data.data.children;
          randomNumber = Math.floor(Math.random() * posts.length);
  
          channel.send(blockMaker(posts[randomNumber].data.title, posts[randomNumber].data.author, posts[randomNumber].data.url, 'r/kittens'));
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success ${sub}\n`);
          break;
        case 'cromch':
          redLink = await axios.get(`https://www.reddit.com/r/cromch/top.json?t=all&limit=1000`);
          posts = redLink.data.data.children;
          randomNumber = Math.floor(Math.random() * posts.length);
  
          channel.send(blockMaker(posts[randomNumber].data.title, posts[randomNumber].data.author, posts[randomNumber].data.url, 'r/cromch'));
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success ${sub}\n`);
          break;
        case 'catnip':
          redLink = await axios.get(`https://www.reddit.com/r/holdmycatnip/top.json?t=all&limit=1000`);
          posts = redLink.data.data.children;
          randomNumber = Math.floor(Math.random() * posts.length);
  
          channel.send(blockMaker(posts[randomNumber].data.title, posts[randomNumber].data.author, NaN, 'r/holdmycatnip'));
          channel.send(posts[randomNumber].data.url);
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success ${sub}\n`);
          break;
        case 'dogs':
        case 'dog':
          redLink = await axios.get(`https://www.reddit.com/r/DOG/top.json?t=all&limit=1000`);
          posts = redLink.data.data.children;
          randomNumber = Math.floor(Math.random() * posts.length);
  
          channel.send(blockMaker(posts[randomNumber].data.title, posts[randomNumber].data.author, posts[randomNumber].data.url, 'r/DOG'));
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success ${sub}\n`);
          break;
        case 'puppies':
        case 'puppy':
          redLink = await axios.get(`https://www.reddit.com/r/puppies/top.json?t=all&limit=1000`);
          posts = redLink.data.data.children;
          randomNumber = Math.floor(Math.random() * posts.length);
  
          channel.send(blockMaker(posts[randomNumber].data.title, posts[randomNumber].data.author, posts[randomNumber].data.url, 'r/puppies'));
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success ${sub}\n`);
          break;
        case 'wholesome':
          redLink = await axios.get(`https://www.reddit.com/r/wholesomememes/top.json?t=all&limit=1000`);
          posts = redLink.data.data.children;
          randomNumber = Math.floor(Math.random() * posts.length);
  
          channel.send(blockMaker(posts[randomNumber].data.title, posts[randomNumber].data.author, posts[randomNumber].data.url, 'r/Wholesome Memes'));
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success ${sub}\n`);
          break;
        default: //Sends a block with all the keywords
          const keywords = new discord.RichEmbed();
  
          keywords.addField('Keywords', '/reddit cats\n\n/reddit kittens\n\n/reddit cromch\n\n/reddit catnip\n\n/reddit dogs\n\n/reddit puppies\n\n/reddit wholesome', true);
          keywords.addField('Decscription', 'Random post from r/cats\n\nRandom post from r/kittens\n\nRandom post from r/cromch\n\nRandom post from r/holdmycatnip\n\nRandom post from r/DOG\n\nRandom post from r/puppies\n\nRandom post from r/WholesomeMemes', true);
          keywords.setColor(0x06b890);
          keywords.setFooter('Breathe Easy');
          channel.send(keywords);
          console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command success keywords\n`)
      }
    } catch {
      channel.send('I wasn\'t able to provide a post from that subreddit however you can still see a kitten!', {
        files: ['./Misc/KittenMouse.gif']
      });
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Reddit command fail\n`);
      return;
    }
  }
  