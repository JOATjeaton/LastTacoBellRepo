import { Component, OnInit } from "@angular/core"
import { cardmodel } from "./card/cardmodel.model";
import { CardsService } from "./card/cards.service";
import { mock_card_list } from "./card/mock_card_list";

@Component({
    selector: 'fm-home',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeMenu implements OnInit{
    title = 'hello-world-app';
    cards: cardmodel [] = [];
  
    constructor(private cardService:CardsService) {
      //put some code for fetching from backend
      for(var card_part of mock_card_list) {
        console.log(card_part);
        this.cards.push(card_part);
      }
    }
  ngOnInit(): void {
    /*this.cardService.getProducts().subscribe((data:cardmodel []) =>{
      console.log("fetching products");
      for (var card of data) {
        console.log(card);
        this.cards.push(card);
      }
    }
    );*/
    
  }
}