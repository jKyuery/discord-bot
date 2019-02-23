const config = require('/Users/kshim/Discord bot dev/Kkyu/config.json');

module.exports = {
    
    name: 'gugudan',
    description: 'profiles',
    execute(message, args)
    {
        let string = 'null';

        switch (args[0])
        {
            case config.gugudan[0]: // Hana
            case '1':
            string = "Name: Shin Bora\nDOB: April 30th 1993\nBlood type: A\nHeight: 162cm (~ 5'4\")\n"
            + "Hobbies and Specialties: Reading, Stretching, looking at porcupine pictures\nPosition: Main Dancer, Leader, Vocalist\n" +
            "Times table: 1\nMotto: Be the person to look back on yourself. Sympathsize.";
            break;

            case config.gugudan[1]: // Soyee
            case '2':
            string = "Name: Chang Sojin\nDOB: November 21st 1996\nBlood type: AB\nHeight: 172cm (~5'8\")\n" +
            "Hobbies and specialties: Cooking, Listening to jazz, watching movies\n" + "Position: Main vocal\n" + 
            "Times table: 2\nMotto: Live a happy life."
            break;

            case config.gugudan[2]: // Sejeong
            case '3':
            string = "Name: Kim Sejeong\nDOB: August 28th 1996\nBlood type: AB\nHeight: 165cm (~5'5\")\n" +
            "Hobbies and specialties: Arm and leg wrestling, cooking, drawing, rewatching dramas/movies, snorkeling\n" +
            "Position: Main vocal\nTimes table: 3\nMotto: When you think it's your last, two more times!"
            break;

            case config.gugudan[3]: // Nayoung
            case '4':
            string = "Name: Kim Nayoung\nDOB: November 23rd 1995\nBlood type: O\nHeight: 169cm (~5'7\")\n" +
            "Hobbies and specialties: Matching keys, building harmony, watching documentaries, listening to other genres of music\n"
            + "Position: Lead Vocal\nTimes table: 4\nMotto: Be thankful for everything and do your best! Optimism power!!!"
            break;

            case config.gugudan[4]: // Hyeyeon
            case '5':
            string = "Name: Cho Hyeyeon\nDOB: August 5th 2000\nBlood type: O\nHeight: 167cm (~5'6\")\n" +
            "Hobbies and specialties: Hip-hop dance, baking, watching food-eating broadcasts\n Position: Lead Vocal\n Times table: 5" +
            "Motto: Without pain, there's nothing to gain. Enjoy it if you can't avoid it."
            break;

            case config.gugudan[5]: // Haebin
            case '6':
            string = "Name: Han Haebin\nDOB: August 16th 1995\nBlood type: B\nHeight: 169cm (~ 5'7\")\n" +
            "Hobbies and Specialties: Cooking, Finding cooking blogs, strolling\nPosition: Main Vocal\nTimes table: 6\n"
            + "Motto: Don't lie. Time is medicine."
            break;

            case config.gugudan[6]: // Mimi
            case '7':
            string = "Name: Jeong Mimi \nDOB: January 1st 1993\nBlood type: B\nHeight: 163cm (~ 5'4.17\")\n" +
            "Hobbies and Specialities: Computer games, dance, acting, watching webdramas and webtoons, bugging younger members\n" +
            "Position: Vocalist \nTimes table: 7\nMotto: Optimistic thinking is a part of what defines me! R = VD"
            break;

            case config.gugudan[7]: // Sally
            case '8':
            string = "Name: Liu Xiening\nDOB: October 23rd 1996\nBlood type: N/A\nHeight: 166cm (~ 5'5\")\n" +
            "Hobbies and specialties: Reading an orally read children's story, cooking, shopping" +
            "Position: Lead Rapper, Lead Dancer, Vocalist\nTimes table: 8\nMotto: My life, fighting! Smile while living" 
            break;

            case config.gugudan[8]: // Mina
            case '9':
            string = "Name: Kang Mina\nDOB: December 4th 1999\nBlood type: O\nHeight: 163cm (~5'4\")\n" +
            "Hobbies and specialties: Waacking, collecting environment pictures, reading history books, watching how to make Korean cuisine"
            + "Position: Main Rapper, Main Dancer, Vocalist\nTimes table: 9\nMotto: Don't regret and be devoted in the present."
            + "\nA loaf of bread is better than the song of many birds."
            break;

            default:
            string = "Not a member!";
            message.reply(string);
            break;
        }

        message.channel.send(string);
    },
};