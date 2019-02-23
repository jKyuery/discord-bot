module.exports = {

    name: 'help',
    description: 'directory',
    execute(message, args)
    {
        let string = null;

        string = "YouTube streaming - <#528740335179005952>\n" + // #yt-streaming
        "Support the group - <#529096670508613632>\n" + // #support the group
        "Announcements - <#528737685787901957>\n"+ // Announcements
        "Events - <#528737569425588246>"; // Events

        message.channel.send(string);

    }
}