import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Country } from "../interfaces/countryInterfaces.interface";

@Injectable()

export class CountryService {

  private _apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) {}

  getByName( name: string ): Observable<Country[]>{
    const url = `${this._apiURL}/name/${name}`;
    return this.http.get<Country[]>(url, { params: this.getParams });
  }

  getByCapital( name: string ): Observable<Country[]>{
    const url = `${this._apiURL}/capital/${name}`;
    return this.http.get<Country[]>(url, { params: this.getParams });
  }

  getByRegion( name: string ): Observable<Country[]>{
    const url = `${this._apiURL}/region/${name}`;
    return this.http.get<Country[]>(url, { params: this.getParams });
  }

  getCountryDetails( id: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this._apiURL}/alpha/${id}`);
  }

  get getParams(){
    return new HttpParams().set('fields', 'flags,name,population,cca3');
  }
}