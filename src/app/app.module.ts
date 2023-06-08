import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; // Required for API implementation
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PrintShipsComponent } from './print-ships/print-ships.component';
import { IndexComponent } from './index/index.component';

import { ScApiService } from './sc-api.service';
import { MembersComponent } from './members/members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    AppComponent,
    PrintShipsComponent,
    IndexComponent,
    MembersComponent,
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
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [ScApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
