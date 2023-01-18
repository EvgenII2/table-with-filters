import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlanetTableComponent } from './components/planet-table/planet-table.component';
import { PlanetFilterComponent } from './components/planet-filter/planet-filter.component';
import { PlanetTableRowComponent } from './components/planet-table-row/planet-table-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetTableComponent,
    PlanetFilterComponent,
    PlanetTableRowComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
