import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule } from '@ionic/angular';
import { ApifilmesPageRoutingModule } from './apifilmes-routing.module';
import { ApifilmesPage } from './apifilmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ApifilmesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ApifilmesPage]
})
export class ApifilmesPageModule {}


