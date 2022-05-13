import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countryInterfaces.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: Country;
  errorOccurred: boolean = false;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryDetails( id ))
      )
      .subscribe({
        next: countryArr => {
          this.errorOccurred = false;
          [this.country] = countryArr;
        },
        error: err => this.errorOccurred = true
      });
  }

  getCurrency(){
    return Array.from(Object.values(this.country.currencies));
  }
  getLanguage(){
    return Array.from(Object.values(this.country.languages));
  }

}
