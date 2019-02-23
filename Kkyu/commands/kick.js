module.exports = {

    name: 'kick',
    description: 'kicks a user from the server',
    execute(message, args)
    {
        let member = message.mentions.members.first();

        member.kick().then((member) =>{
            // Successful message
            message.channel.send(member.displayName + " was kicked.");
        }).catch(() => {

            message.channel.send("It doesn't affect " + member.displayName + "...");

        });
    }
}