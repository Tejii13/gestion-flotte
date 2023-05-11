import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScApiSubscribeComponent } from './sc-api-subscribe/sc-api-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    ScApiSubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
