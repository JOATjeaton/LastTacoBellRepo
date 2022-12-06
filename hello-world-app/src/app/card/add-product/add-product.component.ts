import { Component, OnInit } from '@angular/core';
import { cardmodel } from '../cardmodel.model';
import { CardsService } from '../cards.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private cs:CardsService) { }

  ngOnInit(): void {
  }
  addProduct(product:cardmodel) {
    console.log('You clicked add product');
    console.log(product);
    this.cs.addProduct(product);
  }
}
