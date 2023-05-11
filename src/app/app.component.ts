import { Component, OnInit } from '@angular/core';
import { ScApiService } from './sc-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(public app: ScApiService) {}
  title = 'gestion-flotte';

  ngOnInit(): void {}
}
