import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  data: Observable<string>;
  constructor() {
  }
  getData() {
    this.data = new Observable(obser => {
      setTimeout(() => {
      obser.next('first');
      }, 1000);

      setTimeout(() => {
        obser.next('second');
      }, 1000);

      setTimeout(() => {
        obser.next('third');
      }, 7000);
      setTimeout(() => {
        obser.complete();
      }, 10000);
  });
    return this.data;
}
}
