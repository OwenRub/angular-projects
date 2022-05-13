import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  userInput: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  constructor(  ) { }

  emitEvent(){
    if(!this.userInput.trim()) return;
    this.onEnter.emit(this.userInput);
  }

  keyPressed(){
    this.debouncer.next( this.userInput );
  }

  ngOnInit() {
    this.debouncer
      .pipe( debounceTime(300) )
      .subscribe( value => {
        this.onDebounce.emit(value);
      });
  }
}
