import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { StateInfoComponent } from './state-info/state-info.component';
import { ComparisonComponent } from './comparison/comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StateInfoComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
