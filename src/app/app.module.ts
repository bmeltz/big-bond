import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './pages/success/success.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { PackingListComponent } from './pages/packing-list/packing-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { DirectionsComponent } from './pages/directions/directions.component'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NoCeilFloorComponent } from './components/no-ceil-floor/no-ceil-floor.component';
import { TandcComponent } from './pages/tandc/tandc.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    HomeComponent,
    ShoppingCartComponent,
    PackingListComponent,
    MenuComponent,
    DirectionsComponent,
    NoCeilFloorComponent,
    TandcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule, 
    NgxNumberSpinnerModule,    
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
