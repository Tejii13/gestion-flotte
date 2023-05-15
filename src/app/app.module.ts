import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; // Required for API implementation
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PrintShipsComponent } from './print-ships/print-ships.component';
import { MembersComponent } from './members/members.component';
import { IndexComponent } from './index/index.component';

import { ScApiService } from './sc-api.service';

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
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [ScApiService, MembersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
