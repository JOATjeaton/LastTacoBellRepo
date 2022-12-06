import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card_img: string;
  @Input() card_title: string;
  @Input() card_msg: string;
  @Input() button_phrase: string;
  @Input() subtext: string;



  constructor() {
    this.card_img = "no image";
    this.card_title = "empty title";
    this.card_msg = "";
    this.button_phrase = "empty";
    this.subtext = "empty";

  }

  ngOnInit(): void {
  }

}
