import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-planet-filter',
  templateUrl: './planet-filter.component.html',
  styleUrls: ['./planet-filter.component.scss'],
})
export class PlanetFilterComponent implements OnInit, OnDestroy {
  filterForm: FormGroup = new FormGroup({
    filterNameControl: new FormControl(),
    filterPopulationFromControl: new FormControl('', [Validators.min(0)]),
    filterPopulationToControl: new FormControl('', [Validators.min(0)]),
  });
  destroySub: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.filterForm.valueChanges
      .pipe(takeUntil(this.destroySub))
      .subscribe((changes) => {
        console.log(this.filterForm.controls);
        Object.keys(this.filterForm.controls).forEach((control) => {
          this.filterForm.controls[control].updateValueAndValidity({
            onlySelf: true,
          });
          this.filterForm.controls[control].markAsTouched();
        });
      });
  }

  ngOnDestroy(): void {
    this.destroySub.next(true);
  }

  onSubmit() {
    console.log(this.filterForm.getRawValue());
  }
}
