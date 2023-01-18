import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IData, IFilter } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly data = require('../../data/planets.json');

  filterSub: Subject<IFilter> = new Subject();

  constructor() {}

  getPlanets() {
    return new Observable<IData>((observer: any) => {
      setTimeout(() => {
        observer.next(this.data);
        observer.complete();
      }, 2000);
    });
  }
}
