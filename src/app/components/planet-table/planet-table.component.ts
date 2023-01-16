import { Component, OnInit } from '@angular/core';
import { IData, IPlanetData } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
  styleUrls: ['./planet-table.component.scss'],
})
export class PlanetTableComponent implements OnInit {
  planets: IPlanetData[] = [];
  loading: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getPlanet().subscribe({
      next: (result: IData) => {
        if (result) {
          this.planets = result.results;
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
