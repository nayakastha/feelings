const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ping', (receivedMessage) => {
    
    if (receivedMessage.author == client.user) {
        return
    }

    receivedMessage.channel.send("Hey! cheer up it's gonna be okay...just a matter of time" + receivedMessage.content)

     if (receivedMessage.content === "hey") {
      receivedMessage.reply("hi there")
      }
      else if (receivedMessage.content === "u good bro? is everything fine") {
      receivedMessage.channel.send("no bro")
       } 
       else if (receivedMessage.content === "I am all good!") {
        receivedMessage.react("❤️")
  }


}
)

client.login("ODc4NTcwNzgwNDY2NzYxNzI4.YSDGzQ.iBYpGFIvtNZBkvZBivPyubGnRys") 