import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; // Required for API implementation
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PrintShipsComponent } from './print-ships/print-ships.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';

import { ScApiService } from './sc-api.service';
import { MembersComponent } from './members/members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PrintShipsComponent,
    IndexComponent,
    MembersComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [ScApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
