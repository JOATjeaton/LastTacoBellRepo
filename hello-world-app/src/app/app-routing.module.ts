import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './card/add-product/add-product.component';
import { DeliveryLayoutComponent } from './delivery-layout/delivery-layout.component';
import { TBMenuLayoutComponent } from './first-layout.component';
import { GiftCardLayoutComponent } from './gift-card-layout/gift-card-layout.component';
import { HomeMenu } from './home-layout.component';
import { LocationLayoutComponent } from './location-layout/location-layout.component';
import { NutritionLayoutComponent } from './nutrition-layout/nutrition-layout.component';
import { RewardsLayoutComponent } from './rewards-layout/rewards-layout.component';

const routes: Routes = [
  {path: '',component: HomeMenu},
  {path:'food', component:TBMenuLayoutComponent},
  {path: 'locations', component:LocationLayoutComponent},
  {path: 'delivery', component:DeliveryLayoutComponent},
  {path: 'rewards', component:RewardsLayoutComponent},
  {path: 'nutrition', component:NutritionLayoutComponent},
  {path: 'gift-cards', component:GiftCardLayoutComponent},
  {path: 'admin', component:AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
