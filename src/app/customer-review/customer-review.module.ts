import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CustomerReviewComponent } from './customer-review.component';


@NgModule({
  declarations: [
    CustomerReviewComponent
  ],
  imports: [
    CommonModule, CarouselModule,
  ],
  exports: [
    CustomerReviewComponent
  ]
})
export class CustomerReviewModule { }
