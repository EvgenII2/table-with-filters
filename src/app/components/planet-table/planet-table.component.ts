import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IData, IFilter, IPlanetData } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
  styleUrls: ['./planet-table.component.scss'],
})
export class PlanetTableComponent implements OnInit, OnDestroy {
  planets: IPlanetData[] = [];
  loading: boolean = false;

  destroySub: Subject<boolean> = new Subject();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.filterSub
      .pipe(takeUntil(this.destroySub))
      .subscribe((filter: IFilter) => {
        this.getPlanets(filter);
      });
    this.getPlanets();
  }

  getPlanets(filter?: IFilter) {
    this.loading = true;
    this.dataService.getPlanets().subscribe({
      next: (result: IData) => {
        if (result) {
          this.planets = result.results;
          if (filter) {
            this.searchPlanets(filter);
          }
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      },
    });
    if (filter) {
      console.log(
        this.planets
          .filter((planet: IPlanetData) => {
            return (
              filter.filterNameControl &&
              planet.name.includes(filter.filterNameControl.trim())
            );
          })
          .filter((planet: IPlanetData) => {
            return (
              filter.filterDiameterFromControl &&
              parseInt(planet.diameter) >= filter.filterDiameterFromControl
            );
          })
          .filter((planet: IPlanetData) => {
            return (
              filter.filterDiameterToControl &&
              parseInt(planet.diameter) > filter.filterDiameterToControl
            );
          })
      );
    }
  }

  searchPlanets(filter: IFilter) {
    if (filter.filterNameControl) {
      this.planets = [
        ...this.planets.filter((planet: IPlanetData) => {
          return (
            filter.filterNameControl &&
            planet.name
              .toLowerCase()
              .includes(filter.filterNameControl.trim().toLowerCase())
          );
        }),
      ];
    }
    if (filter.filterDiameterFromControl) {
      this.planets = [
        ...this.planets.filter((planet: IPlanetData) => {
          return (
            filter.filterDiameterFromControl &&
            parseInt(planet.diameter, 10) >= filter.filterDiameterFromControl
          );
        }),
      ];
    }
    if (filter.filterDiameterToControl) {
      this.planets = [
        ...this.planets.filter((planet: IPlanetData) => {
          return (
            filter.filterDiameterToControl &&
            parseInt(planet.diameter, 10) <= filter.filterDiameterToControl
          );
        }),
      ];
    }
  }

  ngOnDestroy(): void {
    this.destroySub.next(true);
  }
}
