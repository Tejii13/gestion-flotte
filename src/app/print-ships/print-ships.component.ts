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
      this.apiData = data.data;
    });
  }

  private myFormShip: string;
  private ship: Ship;

  public shipForm: FormGroup;
  public option: string;
  public myFleet: Ship[] = [];
  public imageUrl: string;
  public isLocal: boolean;

  handleAdd(option: string) {
    // Get the value of the input to find the ship
    this.myFormShip = this.shipForm.get('ship')?.value;

    // Search a ship with the same name as input in the api data
    for (let shipIndex of this.apiData) {
      if (shipIndex && shipIndex.name === this.myFormShip) {
        // Creation of a variable to manipulate the image Url
        this.imageUrl = shipIndex.media[0].source_url;

        // Create a new instance of Ship
        const newShip: Ship = {
          name: shipIndex.name,
          media: shipIndex.media[0].source_url,
          type: shipIndex.type,
          url: `https://robertsspaceindustries.com${shipIndex.url}`,
          size: shipIndex.size,
          cargocapacity: shipIndex.cargocapacity,
          manufacturer: shipIndex.manufacturer.name,
          max_crew: shipIndex.max_crew,
          production_status: shipIndex.production_status,
        };

        // Checking if image is saved locally or remotely
        if (this.imageUrl.slice(0, 6) === '/media') {
          this.isLocal = true;
          console.log('isLocal');
        }

        // Update the name value of the ship
        this.ship = newShip;
        // Add the ship to the end of the list
        this.myFleet.push(this.ship);
        // Put the ship info in the variable ship
        this.ship = shipIndex;
        console.log(shipIndex.manufacturer.name);
      }
    }

    this.shipForm.reset();
  }

  handleRemove(option: Ship) {
    this.myFleet = this.myFleet.filter((value: Ship) => value !== option);
  }
}
