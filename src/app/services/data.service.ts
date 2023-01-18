import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly data = require('../../data/planets.json');

  constructor() {}

  getPlanet() {
    return new Observable<IData>((observer: any) => {
      setTimeout(() => {
        observer.next(this.data);
        observer.complete();
      }, 2000);
    });
  }
}
