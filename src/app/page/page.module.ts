import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentModule } from '../component/component.module';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule, ComponentModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PageModule { }
