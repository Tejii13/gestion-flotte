import { Component, OnInit } from '@angular/core';
import { ScApiService } from './sc-api.service';

import { MembersComponent } from './members/members.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(public app: ScApiService, private members: MembersComponent) {}
  title = 'gestion-flotte';

  ngOnInit(): void {}
}
