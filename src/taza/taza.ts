import { Injectable } from '@angular/core';

@Injectable()
export class TazaService {

  store = {};

  constructor(key = '0', value: Object) {
    value ? this.store[key] = value : this.store[key];
  }

}
