import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ApifinancasPageRoutingModule } from './apifinancas-routing.module';
import { ApifinancasPage } from './apifinancas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ApifinancasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ApifinancasPage]
})
export class ApifinancasPageModule {}
