import { Component } from '@angular/core';
import { cardmodel } from './card/cardmodel.model';
import { mock_card_list } from './card/mock_card_list';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
}
