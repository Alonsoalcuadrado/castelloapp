import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component'
import { InformationComponent } from './information/information.component';
import { NewsComponent } from './news/news.component'



@NgModule({
  declarations: [
    HomeComponent,
    InformationComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
