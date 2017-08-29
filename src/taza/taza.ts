import { Injectable } from '@angular/core';

@Injectable()
export class TazaService {

  store = {};

  do(key = '0', value = {}) {
    this.store[key] = value;
    return this.store[key];
  }

}
