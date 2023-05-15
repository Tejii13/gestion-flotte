import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const membres = [
      { name: 'Tejii', token: 11 },
      { name: 'La-Vigie', token: 22 },
      { name: 'PommeGolden', token: 33 },
      { name: 'Lewis_Detmer', token: 44 },
      { name: 'Suazor', token: 55 },
    ];
    return { membres };
  }

  hiddenToken: number;
}
