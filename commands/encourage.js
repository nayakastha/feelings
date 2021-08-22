//An encouragement you recieve from the bot whenever you are down.

module.exports = async function(tag, guild, channel) {

    try {
      const discord = require('discord.js');
      

      console.log('\x1b[32m%s\x1b[0m', `${guild}:\n${tag} Encourage command success\n`);
     
     
      const embed = discord.MessageEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .setDescription(`Be gentle with yourself. You’re doing the best you can and nobody can ask anything more of you <3', 'There isn\'t a single doubt in my mind everything you need to achieve your goals is a trait you already possess <3', 'I\'m so incredibly proud of you! You deserve to be told that more often, I guess that\'s why i\'m here <3', 'I know you have anxieties and concerns but always remember that when times are their darkest our true character shines above all else and i truly believe you\'re a good person, The way you choose to tackle the challenges ahead of you will prove me right. You are a good person <3', 'You\'re not going to achieve all your goals and beat all your demons in a day and you don\'t have to, Just relax, Make sure you\'re okay today and you\'ll be alright <3', 'Going slow is okay, It doesn\'t matter how slow you go as long as you don\'t stop. Take your time and don\'t rush yourself <3', 'Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you have won, and all the fears you have overcome <3', 'I see something in you that the world needs, The world needs you here <3', 'In case you forgot to remind yourself this morning: Your butt is perfect. Your smile lights up the room. Your mind is insanely cool. You are way more than enough and you\'re doing an amazing job at life <3', 'No matter what happens in the future i am always going to be here and people who care will always be here <3', 'Sometimes the strongest will and the purest ambitions come from a dark place, you **will** make it through this <3', 'Focus on winning small battles, a little progress everyday adds up to something great <3', 'I know you\'re stronger than you believe you are, More capable than you give yourself credit for and more loved than you tell yourself <3', 'It\'s okay to breakdown and scream and cry as long as you never give up and pick yourself back up again to keep fighting <3', 'It may seem impossible now but you\'ll realise it wasn\'t when you\'re done <3', 'Soon, when all is well, you’re going to look back on this period of your life and be so glad that you never gave up <3', 'You may think your worries are an impassible mountain but i **know** you can do it and after you do you\ll have shown others it can be done <3', 'Look for something positive in each day even if some days you have to look a little harder <3', 'Don\'t be so hard on yourself! You\'re a work in progress, which means you\'ll get there a little at a time, not all at once <3', 'Take a deep breath, it’s just a bad day not a bad life. Tomorrow will be better <3', 'Strong people don\'t have it easy, You become a strong person when you\'ve fought through adversity. You are a strong person <3`)
        .setHeader('Encourage Command', 'By: ' + message.author.tag);
      channel.send({embed});
      channel.send(messages[rnd]);
      channel.send('I hope this lifts up your spirit!');
      return;
    } catch {
      console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Encourage command fail\n`);
      channel.send('*Feelings trips over taking the encourage command with it*\n\noof! It looks like I tripped up when attempting this command. Please try again');
      return;
    }
  }
