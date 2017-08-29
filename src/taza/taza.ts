import { Injectable } from '@angular/core';

@Injectable()
export class TazaService {

  store = {};

  do(key = '0', value: Object) {
    if (this.store[key] === undefined) {
      this.store[key] = value || {};
    }

    return this.store[key];
  }

}
