import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the required components to an api call

import { ShipApi } from './ships'; // Import the interface Ship

@Injectable({
  providedIn: 'root',
})
export class ScApiService {
  constructor(private http: HttpClient) {}

  // Function the calls the Api and returns the data to it's own caller
  fetchApi(apiUrl: string) {
    console.log('Fetch');
    return this.http.get<ShipApi>(apiUrl);
  }
}
