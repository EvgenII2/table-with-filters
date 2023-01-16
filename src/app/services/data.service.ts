import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly data = require('../../data/planets.json');

  constructor(private http: HttpClient) {}

  getPlanet() {
    return this.data;
  }

  public getJSON(file: string): Observable<any> {
    return this.http.get(file);
  }
}
