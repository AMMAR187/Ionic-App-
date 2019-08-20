import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddSalonPageModule } from './pages/add-salon/add-salon.module';
import { HomePageModule } from './pages/home/home.module';
import { ContactPageModule } from './pages/contact/contact.module';
import { AboutusPageModule } from './pages/aboutus/aboutus.module';
import { PartnersPageModule } from './pages/partners/partners.module';
import { NearbySalonsPageModule } from './pages/nearby-salons/nearby-salons.module';


export const components = [AddSalonPageModule, HomePageModule, ContactPageModule, AboutusPageModule, PartnersPageModule, NearbySalonsPageModule];
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'aboutus', loadChildren: './pages/aboutus/aboutus.module#AboutusPageModule' },
  { path: 'nearby-salons', loadChildren: './pages/nearby-salons/nearby-salons.module#NearbySalonsPageModule' },
  { path: 'partners', loadChildren: './pages/partners/partners.module#PartnersPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'add-salon', loadChildren: './pages/add-salon/add-salon.module#AddSalonPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
