import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apikey     : string = 'kqTG6CXngjzFV88JrxoU8ANvAYt9PzNY';
  private _baseUrl    : string = 'https://api.giphy.com/v1/gifs';
  private _userHistory: string[] = [];
  private _results    : Gif[] = [];

  constructor( private http: HttpClient ) {
    this._userHistory = JSON.parse(localStorage.getItem('history')!) ?? [];
    this._results = JSON.parse(localStorage.getItem('results')!) ?? [];
  }

  get userHistory(){
    return [...this._userHistory];
  }

  get results(){
    return [...this._results];
  }

  addToHistory( key: string ){
    const keyword = key.toLowerCase();

    if(!keyword) return;

    if( !this._userHistory.includes( keyword )){ 
      this._userHistory.unshift( keyword );
      this._userHistory = this._userHistory.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._userHistory));
    }
  }

  searchGifs( query: string){
    if(!query) return;

    const params = new HttpParams()
      .set('api_key', this._apikey)
      .set('q', query)
      .set('limit', '10');

    this.http.get<GIFResponse>(`${ this._baseUrl }/search`,{ params })
      .subscribe( ( giphyResponse ) => {
        this._results = giphyResponse.data;
        localStorage.setItem('results', JSON.stringify(giphyResponse.data));
      });
  }

}
