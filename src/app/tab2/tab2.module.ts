import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page'; // Verifique este caminho

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Tab2Page] // Verifique se Tab2Page está correto
})
export class Tab2PageModule {}
