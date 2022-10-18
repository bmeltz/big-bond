import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './pages/success/success.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { AppRoutingModule } from './app-routing.module';
import { StoreComponent } from './pages/store/store.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { PackingListComponent } from './pages/packing-list/packing-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { DirectionsComponent } from './pages/directions/directions.component'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NoCeilFloorComponent } from './components/no-ceil-floor/no-ceil-floor.component';
import { scheduleComponent } from './pages/schedule/schedule.component';
import { TandcComponent } from './pages/tandc/tandc.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DetailedComponent } from './pages/packing-list/detailed/detailed.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MatCardModule } from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { FaqComponent } from './pages/faq/faq.component';
import { ShopPoliciesComponent } from './pages/shop-policies/shop-policies.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    HomeComponent,
    StoreComponent,
    ShopPoliciesComponent,
    PackingListComponent,
    MenuComponent,
    DirectionsComponent,
    NoCeilFloorComponent,
    scheduleComponent,
    TandcComponent,
    DetailedComponent,
    GalleryComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule, 
    NgxNumberSpinnerModule,    
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: [
      LocationStrategy
    ],
      useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
