import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureComponent } from './feature/feature.component';
import { ProductsComponent } from './products/products.component';
import { FirmComponent } from './firm/firm.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { SliderComponent } from './slider/slider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    WelcomeComponent,
    FeatureComponent,
    ProductsComponent,
    FirmComponent,
    TestimonialComponent,
    BlogComponent,
    SliderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule, NgbModule, CarouselModule
  ],
  exports: [
    WelcomeComponent,
    FeatureComponent,
    ProductsComponent,
    FirmComponent,
    TestimonialComponent,
    BlogComponent,
    SliderComponent
  ]
})
export class ComponentModule { }
