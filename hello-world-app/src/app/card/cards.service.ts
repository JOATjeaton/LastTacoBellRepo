import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cardmodel } from "./cardmodel.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable(
    {providedIn: 'root'}
)

export class CardsService {
    private baseUrl:string = "https://tacobellapp-aad01-default-rtdb.firebaseio.com/";
    private cardsEndPoint:string = "products";

    constructor(private db:AngularFireDatabase){

    }
    getProducts() {
        return this.db.list<cardmodel>("products").valueChanges;
    }

   // getProduct(index:number){
   //     return this.http.get<cardmodel []>(this.baseUrl+ 'products' + '/' + index + '.json;');
   // }

    addProduct(product: cardmodel) {
        this.db.list<cardmodel>("products").push(product);
    }
}