module.exports = {

    // Syntax: !rc <command> <role name> or !rc change <role name> <second role name>
    name: 'rc',
    description: 'change role to desired role',
    execute(message, args)
    {
        let role = message.guild.roles.find(r => r.name === args[1]);
        let member = message.mentions.members.first();

        switch (args[0])
        {
            case 'add':
            try {
                if (!message.role.roles.has(role.id))
                {
                    member.addRole(role).catch(console.error);
                }
            } catch (error) {

                message.reply("Unable to add role");
            }
            break;

            case 'remove':
            try {
                if (message.role.roles.has(role.id))
                {
                    member.removeRole(role).catch(console.error);
                }
            } catch (error) {
                message.reply("Unable to remove role");
            }
            break;

            case 'change':
            try {
                if (message.role.roles.has(role.id))
                {
                    let newRole = message.guild.roles.find(r => r.name === args[2]);

                    member.addRole(newRole);
                    member.removeRole(role).catch(console.error);
                    
                }
            } catch (error) {
                message.reply("Unable to change requested role");
            }
            break;

            default:
            message.reply("Not an existing command");
            break;
        }
    }
}