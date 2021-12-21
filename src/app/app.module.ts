import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './pages/shopping-cart/product/product.component';
import { SuccessComponent } from './pages/success/success.component';
import { FailureComponent } from './pages/failure/failure.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuccessComponent,
    FailureComponent,
    HomeComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
