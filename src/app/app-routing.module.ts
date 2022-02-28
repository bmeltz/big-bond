import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectionsComponent } from './pages/directions/directions.component';
import { HomeComponent } from './pages/home/home.component';
import { PackingListComponent } from './pages/packing-list/packing-list.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SuccessComponent } from './pages/success/success.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'packing-list', component: PackingListComponent},
  { path: 'directions', component: DirectionsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
