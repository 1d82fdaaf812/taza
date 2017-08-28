import { Injectable } from '@angular/core';

@Injectable()
export class TazaService {
  store = {};

  constructor(key: string, value: Object) {
    value ? this.store[key] = value : this.store[key];
  }

}