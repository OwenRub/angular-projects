import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) { }

  handleSearch(){
    const value = this.txtSearch.nativeElement.value.trim();
    this.addToHistory( value );
    this.searchGifs( value );
  }

  addToHistory( value: string ){
    this.gifsService.addToHistory( value );
    this.txtSearch.nativeElement.value = '';
  }

  searchGifs( value: string ){
    this.gifsService.searchGifs( value );
  }
}
