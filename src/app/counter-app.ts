import { Component } from '@angular/core';

import { createStore, Store, StoreEnhancer } from 'redux';

import { AppState } from './app-state';
import { counterReducer } from './counter-reducer';

let devtools: StoreEnhancer<AppState> = 
  window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

export let store: Store<AppState> = createStore<AppState>(
  counterReducer, 
  devtools
);

@Component({
  selector: 'minimal-redux-app',
  template: 
    `
    <div>
      <counter-component>
      </counter-component>
    </div>
    `
})
export class CounterApp {
}