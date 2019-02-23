const fs = require('fs');
const Discord = require("discord.js");
const config = require('./config.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.once("ready", () => {
    console.log("Ready.");
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('message', message => {

    if (message.content.startsWith((config.prefix[0] || config.prefix[1])) && !message.author.bot)
    {
        const args = message.content.slice(config.prefix[0].length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = bot.commands.get(commandName);

        if (message.content.substring(0,1) === config.prefix[1]) // Commands that start with ?
        { 
            if (message.content.match(config.commands[0]) || message.content.match(configure.commands[5]))
           { // Commands that are ? specific: help, role
                try {

                 command.execute(message,args);

                } catch (e){

                    message.reply("YEET! You got an error, ya nerd");
                    console.log(e); 
                   
                }
           }
        }
        else if (message.content.match(config.commands[1]) || message.content.match(config.commands[2]) ||
        message.content.match(config.commands[3]) || message.content.match(config.commands[4])) // Commands with !
        { // Commands that are ! specific are: ug, play, change role, ban
            try {

                command.execute(message, args);
    
            } catch (error) {

                message.reply('YEET! You got an error, ya nerd');
                console.log(error);
            }

        }
    }

    return;
});
bot.login(config.token); // Personal token