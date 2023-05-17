import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { apiKey } from '../environment/environment';

import { FormGroup, FormBuilder, Form } from '@angular/forms';

import { ScApiService } from '../sc-api.service';
import { Ship } from '../ships';

@Component({
  selector: 'app-print-ships',
  templateUrl: './print-ships.component.html',
  styleUrls: ['./print-ships.component.sass'],
})
export class PrintShipsComponent {
  constructor(
    public printShips: ScApiService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.shipForm = this.formBuilder.group({
      ship: '',
    });
  }

  public apiData: any; // Used in the template
  public shipForm: FormGroup;

  goBack() {
    this.location.back();
  }
  // It prints all the ships present in the Api
  getData() {
    let apiUrl = `https://api.starcitizen-api.com/${apiKey}/cache/ships`;
    this.printShips.fetchApi(apiUrl).subscribe((data) => {
      console.log(data.data);
      console.log(apiUrl);
      this.apiData = data.data;
    });
  }

  public myShip: string;
  public myShipDesc: string;
  public option: string;
  public selectedShip: string;
  private ship: Ship;

  handleAdd(option: string) {
    this.myShip = this.shipForm.get('ship')?.value;
    console.log(this.myShip);
    for (let shipIndex of this.apiData) {
      if (shipIndex && shipIndex.name === this.myShip) {
        this.myShipDesc = `My ship's name is ${shipIndex.name}, it's considered to be a '${shipIndex.type}' ship and is made by ${shipIndex.manufacturer.name}`;
        this.ship = shipIndex;
      }
    }
    console.log(this.ship);
  }
}
