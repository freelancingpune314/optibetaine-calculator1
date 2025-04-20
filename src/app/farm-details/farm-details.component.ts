import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent {
  submitted = false;
  farmForm: FormGroup;

  constructor(
    private router: Router,
    public dataService: DataService,
    private fb: FormBuilder
  ) {
    this.farmForm = this.fb.group({
      birdsCount: [this.dataService.birdsCount || null, [Validators.required, Validators.min(1)]],
      fromDate: [this.dataService.fromDate || null, Validators.required],
      toDate: [this.dataService.toDate || null, Validators.required]
    }, { validator: this.ageRangeValidator });
  }

  ageRangeValidator(form: FormGroup) {
    const from = form.get('fromDate')?.value;
    const to = form.get('toDate')?.value;
    return from !== null && to !== null && from >= to ? { fromGreaterThanTo: true } : null;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  onCalculateClick() {
    this.submitted = true;

    if (this.farmForm.valid) {
      // Update data service with form values
      this.dataService.birdsCount = this.farmForm.value.birdsCount;
      this.dataService.fromDate = this.farmForm.value.fromDate;
      this.dataService.toDate = this.farmForm.value.toDate;

      this.navigateTo('results');
    }
  }
}
