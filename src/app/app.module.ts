import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { AppRoutingModule } from './app-routing.module';
import { StoreComponent } from './pages/store/store.component';
import { PackingListComponent } from './pages/packing-list/packing-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { DirectionsComponent } from './pages/directions/directions.component'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NoCeilFloorComponent } from './components/no-ceil-floor/no-ceil-floor.component';
import { scheduleComponent } from './pages/schedule/schedule.component';
import { TandcComponent } from './pages/tandc/tandc.component';
import { DetailedComponent } from './pages/packing-list/detailed/detailed.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MatCardModule } from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select'; 
import { InfoComponent } from './pages/info/info.component';
import { ShopPoliciesComponent } from './pages/shop-policies/shop-policies.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FaqComponent } from './pages/faq/faq.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from './components/card/card.component';
import { SurvivalGuideComponent } from './pages/survival-guide/survival-guide.component';
import { EthosComponent } from './pages/ethos/ethos.component';


@NgModule({
  declarations: [
    AppComponent,
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
    InfoComponent,
    FaqComponent,
    CardComponent,
    SurvivalGuideComponent,
    EthosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule, 
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule
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
