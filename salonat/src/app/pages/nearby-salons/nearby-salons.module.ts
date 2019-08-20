import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NearbySalonsPage } from './nearby-salons.page';

const routes: Routes = [
  {
    path: '',
    component: NearbySalonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NearbySalonsPage]
})
export class NearbySalonsPageModule {}
