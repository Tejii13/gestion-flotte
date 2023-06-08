import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor() {}
  title = 'gestion-flotte';


  public isShowing: boolean = false;

  toggleSidebar() {
    this.isShowing = !this.isShowing;
  }
}
