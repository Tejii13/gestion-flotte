import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the required components to an api call
import { Observable } from 'rxjs';

import { Ship } from './ships'; // Import the interface Ship
import { apiKey } from './environment/environment'; // The key for api access is private, you should have your own

@Injectable({
  providedIn: 'root',
})
export class ScApiService {
  constructor(private http: HttpClient) {}

  fetchApi(): Observable<any> {
    console.log('Fetch');
    return this.http.get<any>(
      `https://api.starcitizen-api.com/${apiKey}/cache/ships`
    );
  }
}
