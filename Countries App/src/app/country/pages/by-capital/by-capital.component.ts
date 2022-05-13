import { Component } from '@angular/core';
import { Country } from '../../interfaces/countryInterfaces.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  private _countries: Country[] = [];
  errorOccurred: boolean = false;
  showSuggestions: boolean = true;
  suggestions: Country[] = [];

  constructor( private countryService: CountryService ) { }

  get countries(){
    return [...this._countries];
  }

  searchCountry( userInput: string ){
    this.errorOccurred = false;
    this.showSuggestions = false;

    this.countryService.getByCapital(userInput)
      .subscribe({ next: (countryResponse) => {
        this._countries = countryResponse;
      }, error: (err) => {
        this.errorOccurred = true;
        this._countries = [];
      }});
  }

  makeSuggestion( userInput: string ){
    this.showSuggestions = true;

    this.countryService.getByCapital( userInput )
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
