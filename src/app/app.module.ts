import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http'; // Required for API implementation
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PrintShipsComponent } from './print-ships/print-ships.component';
import { MembersComponent } from './members/members.component';
import { IndexComponent } from './index/index.component';

import { ScApiService } from './sc-api.service';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    PrintShipsComponent,
    MembersComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [ScApiService, MembersComponent, InMemoryDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
