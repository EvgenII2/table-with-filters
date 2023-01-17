import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanetTableComponent } from './components/planet-table/planet-table.component';
import { PlanetFilterComponent } from './components/planet-filter/planet-filter.component';
import { PlanetTableRowComponent } from './components/planet-table-row/planet-table-row.component';

@NgModule({
  declarations: [AppComponent, PlanetTableComponent, PlanetFilterComponent, PlanetTableRowComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
