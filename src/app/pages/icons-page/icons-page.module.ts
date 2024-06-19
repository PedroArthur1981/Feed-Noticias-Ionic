import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconsPagePageRoutingModule } from './icons-page-routing.module';

import { IconsPagePage } from './icons-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconsPagePageRoutingModule
  ],
  declarations: [IconsPagePage]
})
export class IconsPagePageModule {}
