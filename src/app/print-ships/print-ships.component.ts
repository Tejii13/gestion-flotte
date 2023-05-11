import { Component } from '@angular/core';

import { ScApiService } from '../sc-api.service';

@Component({
  selector: 'app-print-ships',
  templateUrl: './print-ships.component.html',
  styleUrls: ['./print-ships.component.sass'],
})
export class PrintShipsComponent {
  constructor(public printShips: ScApiService) {}

  printData() {
    this.printShips.fetchApi().subscribe((data) => {
      console.log(data.data);
    });
    console.log('Fin');
  }
}
