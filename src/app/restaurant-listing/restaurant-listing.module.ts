import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantListingRoutingModule } from './restaurant-listing-routing.module';
import { RestaurantListingComponent } from './component/restaurant-listing.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    RestaurantListingComponent
  ],
  imports: [
    CommonModule,
    RestaurantListingRoutingModule
  ]
})
export class RestaurantListingModule { }
