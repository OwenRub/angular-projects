import { Component } from '@angular/core';
import { Country } from '../../interfaces/countryInterfaces.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  private _countries: Country[] = [];
  errorOccurred: boolean = false;
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = '';

  constructor( private countryService: CountryService ) { }

  get countries(){
    return [...this._countries];
  }

  searchCountry(){
    this.errorOccurred = false;
    
    this.countryService.getByRegion( this.activeRegion )
      .subscribe({ next: (countryResponse) => {
        this._countries = countryResponse;
      }, error: (err) => {
        this.errorOccurred = true;
        this._countries = [];
      }});
  }

  activateRegion( region: string ){
    this.activeRegion = region;
    this.errorOccurred = false;
    this.searchCountry();
  }

}
