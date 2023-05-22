import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { apiKey } from '../environment/environment';

import { FormGroup, FormBuilder } from '@angular/forms';

import { ScApiService } from '../sc-api.service';
import { Ship } from '../ships';

@Component({
  selector: 'app-print-ships',
  templateUrl: './print-ships.component.html',
  styleUrls: ['./print-ships.component.sass'],
})
export class PrintShipsComponent implements OnInit {
  constructor(
    public printShips: ScApiService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.shipForm = this.formBuilder.group({
      ship: '',
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  public apiData: any; // Used in the template
  public isFetching: boolean;

  goBack() {
    this.location.back();
  }

  // It prints all the ships present in the Api
  getData() {
    this.isFetching = true;
    let apiUrl = `https://api.starcitizen-api.com/${apiKey}/cache/ships`;
    this.printShips.fetchApi(apiUrl).subscribe((data) => {
      this.isFetching = false;
      console.log(data.data);
      console.log(apiUrl);
      this.apiData = data.data;
    });
  }

  private myFormShip: string;
  private ship: Ship;

  public shipForm: FormGroup;
  public option: string;
  public myFleet: string[] = [''];
  public myFleetIndex: number = 0;
  public myListId: number;

  handleAdd(option: string) {
    // Get the value of the input to find the ship
    this.myFormShip = this.shipForm.get('ship')?.value;
    // Search a ship with the same name as input in the api data
    for (let shipIndex of this.apiData) {
      if (shipIndex && shipIndex.name === this.myFormShip) {
        // Add the ship to the end of the list
        this.myFleet[this.myFleetIndex] = shipIndex.name;
        this.myFleetIndex++;
        // Get the unique Id of a ship
        this.myListId = shipIndex.id;
        // Put the ship info in the variable ship
        this.ship = shipIndex;
      }
    }
    this.shipForm.reset();
    console.log(this.ship);
  }

  handleRemove(option: string) {
    this.myFleet = this.myFleet.filter((value) => value !== option);
  }
}
