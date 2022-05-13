import { Component } from '@angular/core';

import { Country } from '../../interfaces/countryInterfaces.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {

  private _countries: Country[] = [];
  errorOccurred: boolean = false;
  suggestions: Country[] = [];
  showSuggestions: boolean = true;

  constructor( private countryService: CountryService ) { }

  get countries(){
    return [...this._countries];
  }

  searchCountry( userInput: string ){
    this.errorOccurred = false;
    this.showSuggestions = false;

    this.countryService.getByName(userInput)
      .subscribe({ 
        next: (countryResponse) => {
          this._countries = countryResponse;
        }, 
        error: (err) => {
          this.errorOccurred = true;
          this._countries = [];
        }
      });
  }

  makeSuggestion( userInput: string ){
    this.showSuggestions = true;
    this.countryService.getByName( userInput )
      .subscribe( {
        next: (suggestions) => {
          this.suggestions = suggestions.splice(0,5);
        },
        error: (err) => {
          this.suggestions = [];
        }
      })
  }
}
