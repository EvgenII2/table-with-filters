import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
  styleUrls: ['./planet-table.component.scss'],
})
export class PlanetTableComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log(this.dataService.getPlanet());
  }
}
