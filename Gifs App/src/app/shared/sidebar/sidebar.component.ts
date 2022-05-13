import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) { }

  get userHistory(){
    return this.gifsService.userHistory;
  }

  getGifs( keyword: string ){
    this.gifsService.searchGifs(keyword);
  }

}