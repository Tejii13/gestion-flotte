import { Component } from '@angular/core';
import { apiKey } from '../environment/environment';
// import { Ship } from '../ships';

import { ScApiService } from '../sc-api.service';
import { Ship } from '../ships';

@Component({
  selector: 'app-print-ships',
  templateUrl: './print-ships.component.html',
  styleUrls: ['./print-ships.component.sass'],
})
export class PrintShipsComponent {
  constructor(public printShips: ScApiService) {}

  // public apiData: Ship; // Used in the template
  public apiData: any; // Used in the template
  public brands: Array<Array<string>>;

  // It prints all the ships present in the Api
  printData() {
    let apiUrl = `https://api.starcitizen-api.com/${apiKey}/cache/ships`;
    this.printShips.fetchApi(apiUrl).subscribe((data) => {
      console.log(data.data);
      console.log(apiUrl);
      this.apiData = data.data;
      this.sortBrands(this.apiData);
    });
  }

  // Get's each ship and sorts it in an array
  sortBrands(apiData: any) {
    console.log(apiData.name);
  }
}
