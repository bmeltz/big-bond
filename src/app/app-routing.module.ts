import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectionsComponent } from './pages/directions/directions.component';
import { HomeComponent } from './pages/home/home.component';
import { scheduleComponent } from './pages/schedule/schedule.component';
import { PackingListComponent } from './pages/packing-list/packing-list.component';
import { StoreComponent } from './pages/store/store.component';
import { SuccessComponent } from './pages/success/success.component';
import { TandcComponent } from './pages/tandc/tandc.component';
import { DetailedComponent } from './pages/packing-list/detailed/detailed.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ShopPoliciesComponent } from './pages/shop-policies/shop-policies.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: StoreComponent},
  { path: 'shop-policies', component: ShopPoliciesComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'packing-list', component: PackingListComponent},
  { path: 'directions', component: DirectionsComponent},
  { path: 'schedule', component: scheduleComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'terms-and-conditions', component: TandcComponent},
  { path: 'detailed-packing-list', component: DetailedComponent},
  { path: 'faq', component: FaqComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
