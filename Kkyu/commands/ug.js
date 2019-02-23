const config = require('/Users/kshim/Discord bot dev/Kkyu/config.json');

module.exports = {

    name: 'ug',
    description: 'unhelpful guide to gugudan (my version)',
    execute(message, args)
    {
        let string = 'null';

        switch (args[0])
        {
            case config.gugudan[0]: // Hana
            case '1':
            string = "smol but stronk leader\n" + "multilingual(?) leader\n" + 
            "has troubles waking up\n" + "(self-proclaimed) visual\n" + "actually has a vlive series called \"Hana's chit-chat radio\""
            break;

            case config.gugudan[1]: // Soyee
            case '2':
            string = "sloth in the team\n" + "members make fun of her voice\n" + "tallest member in the team\n" 
            + "actually hilarious\n" + "blacklisted from mimi's kitchen"
            break;

            case config.gugudan[2]: // Sejeong
            case '3':
            string = "god-tier vocals and talents\n" + "10cm forehead\n" + "actually stronk\n" + "an actual good daughter"
            break;

            case config.gugudan[3]: // Nayoung
            case '4':
            string = "\*Nayoung~ Nayoung~ Nayoung~ the one who always falls down is Nayoung~\nNayoung~ Nayoung~ the one who's always clumsy is Nayoung~\*\n"
            + "\*Nayoung~ Nayoung~ Nayoung~ the one who spills water is Nayoung!\nNayoung~ Nayoung~ Nayoung~ the one who bruises is Nayoung~\*\n"+
            "\*\*Prod. by Sejeong\*\*\n"
            break;

            case config.gugudan[4]: // Hyeyeon
            case '5':
            string = "Former member of gugudan, departed the group on October 2018 to focus on studies\n" + 
            "dancing god\n Mischevious maknae\n the english speaker"
            break;

            case config.gugudan[5]: // Haebin
            case '6':
            string = "equalizer\n an actual mom\nhas a busan dilect\n queen of sustainability\ntop-tier vocal quality"
            break;

            case config.gugudan[6]: // Mimi
            case '7':
            string = "an actual chaotic troll (AKA Yalmimi)\nbut actually soft\nA VISUAL\n" +
            "cooking show host on vlive - Mimi's kitchen, cooks food straight from hell\n" 
            + "NEOUL CHEOEUM BON GEU SOONGAN CHOKI TTAK WHATSUH"
            break;

            case config.gugudan[7]: // Sally
            case '8':
            string = "an actual teddy bear\ntrying to learn korean\nplz protec\na dancing queen"
 
            break;

            case config.gugudan[8]:
            case '9':
            string = "a kawaii visual\n IF YOU HURT KANG MINA ISTG I WILL FIND YOU AND FIGHT YOU\n"
            + "often ignored by her unnies\n rapper but slow speaker\n multitalented wig snatcher"
            break;

            default:
            string = "Not a member!";
            message.reply(string);
            break;
        }

        message.channel.send(string);
    }
};