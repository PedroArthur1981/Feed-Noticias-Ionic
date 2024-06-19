import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ApicienciaPageRoutingModule } from './apiciencia-routing.module';
import { ApicienciaPage } from './apiciencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    HttpClientModule,
    ApicienciaPageRoutingModule
  ],
  declarations: [ApicienciaPage]
})
export class ApicienciaPageModule {}

