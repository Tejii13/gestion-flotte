import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // Required for API implementation

import { AppComponent } from './app.component';
import { ScApiService } from './sc-api.service';
import { PrintShipsComponent } from './print-ships/print-ships.component';

@NgModule({
  declarations: [AppComponent, PrintShipsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ScApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
