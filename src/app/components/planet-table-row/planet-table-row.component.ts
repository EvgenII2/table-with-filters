import { Component, Input, OnInit } from '@angular/core';
import { IPlanetData } from 'src/app/models/models';

@Component({
  selector: 'app-planet-table-row',
  templateUrl: './planet-table-row.component.html',
  styleUrls: ['./planet-table-row.component.scss'],
})
export class PlanetTableRowComponent implements OnInit {
  @Input() planetInfo: IPlanetData | null = null;
  @Input() index: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
