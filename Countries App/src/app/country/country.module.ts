import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryService } from './services/country.service';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    SeeCountryComponent,
    ByRegionComponent,
    InputComponent,
    TableComponent
  ],
  exports: [
    ByCountryComponent,
    ByCapitalComponent,
    SeeCountryComponent,
    ByRegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    CountryService
  ]
})
export class CountryModule { }
