import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countryInterfaces.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {

  @Input() countries: Country[] = [];
  @Input() route: string = '';

  constructor() {
  }

}
