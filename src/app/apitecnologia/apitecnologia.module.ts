import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ApitecnologiaPageRoutingModule } from './apitecnologia-routing.module';
import { ApitecnologiaPage } from './apitecnologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    HttpClientModule,
    ApitecnologiaPageRoutingModule
  ],
  declarations: [ApitecnologiaPage]
})
export class ApitecnologiaPageModule {}



