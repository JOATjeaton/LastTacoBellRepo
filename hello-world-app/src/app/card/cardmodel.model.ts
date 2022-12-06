
export class cardmodel {
    card_img: string;
    card_title: string;
    card_msg: string;
    button_phrase: string;
    subtext: string;
    
    constructor(card_img: string, card_title: string, card_msg: string, button_phrase: string, subtext: string) {
        this.card_img = card_img;
        this.card_title = card_title;
        this.card_msg = card_msg;
        this.button_phrase = button_phrase;
        this.subtext = subtext;
    }
}
