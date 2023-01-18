import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IFilter } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planet-filter',
  templateUrl: './planet-filter.component.html',
  styleUrls: ['./planet-filter.component.scss'],
})
export class PlanetFilterComponent implements OnInit, OnDestroy {
  @Output() onSearchEvent = new EventEmitter<IFilter>();

  filterForm: FormGroup = new FormGroup({
    filterNameControl: new FormControl(),
    filterDiameterFromControl: new FormControl(null, [Validators.min(0)]),
    filterDiameterToControl: new FormControl(null, [Validators.min(0)]),
  });
  destroySub: Subject<boolean> = new Subject();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.filterForm.valueChanges
      .pipe(takeUntil(this.destroySub))
      .subscribe((changes) => {
        Object.keys(this.filterForm.controls).forEach((control) => {
          // prettier-ignore
          this.filterForm.controls[control].updateValueAndValidity({ onlySelf: true });
          this.filterForm.controls[control].markAsTouched();
        });
      });
  }

  ngOnDestroy(): void {
    this.destroySub.next(true);
  }

  onSubmit() {
    this.dataService.filterSub.next(this.filterForm.getRawValue());
  }

  eraseFilter(event: any) {
    this.filterForm.reset();
  }
}
