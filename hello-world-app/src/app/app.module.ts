import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './navigation/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './navigation/sidenavbar/sidenavbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { TBMenuLayoutComponent } from './first-layout.component';
import { HomeMenu } from './home-layout.component';
import { LocationLayoutComponent } from './location-layout/location-layout.component';
import { RewardsLayoutComponent } from './rewards-layout/rewards-layout.component';
import { NutritionLayoutComponent } from './nutrition-layout/nutrition-layout.component';
import { GiftCardLayoutComponent } from './gift-card-layout/gift-card-layout.component';
import { DeliveryLayoutComponent } from './delivery-layout/delivery-layout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AddProductComponent } from './card/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    FooterComponent,
    CardComponent,
    NewsContainerComponent,
    TBMenuLayoutComponent,
    HomeMenu,
    LocationLayoutComponent,
    RewardsLayoutComponent,
    NutritionLayoutComponent,
    GiftCardLayoutComponent,
    DeliveryLayoutComponent,
    UserInfoComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
