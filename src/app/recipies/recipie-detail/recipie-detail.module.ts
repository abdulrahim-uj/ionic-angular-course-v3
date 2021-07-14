import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipieDetailPageRoutingModule } from './recipie-detail-routing.module';

import { RecipieDetailPage } from './recipie-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipieDetailPageRoutingModule
  ],
  declarations: [RecipieDetailPage]
})
export class RecipieDetailPageModule {}
