import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CounterApp, store } from './counter-app';
import { AppStore } from './app-store';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    CounterApp,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: AppStore, useValue: store
    }
  ],
  bootstrap: [CounterApp]
})
export class AppModule { }