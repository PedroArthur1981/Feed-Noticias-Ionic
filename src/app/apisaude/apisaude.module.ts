import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ApisaudePageRoutingModule } from './apisaude-routing.module';
import { ApisaudePage } from './apisaude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    HttpClientModule,
    ApisaudePageRoutingModule
  ],
  declarations: [ApisaudePage]
})
export class ApisaudePageModule {}


