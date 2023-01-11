import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module'
import { NavbarComponent } from './navbar/navbar.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { ButtonComponent } from './button/button.component';
import { InfoCardComponent } from './info-card/info-card.component'



@NgModule({
  declarations: [
    NavbarComponent,
    InfoPanelComponent,
    ButtonComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    InfoPanelComponent,
    ButtonComponent,
    InfoCardComponent
  ]
})
export class SharedModule { }
