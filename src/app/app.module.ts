import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // Required for API implementation

import { AppComponent } from './app.component';
import { ScApiService } from './sc-api.service';
import { PrintShipsComponent } from './print-ships/print-ships.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [AppComponent, PrintShipsComponent, MembersComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ScApiService, MembersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
