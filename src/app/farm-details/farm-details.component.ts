import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent {

  constructor(private router: Router, public dataService: DataService) {}
  birdsCount: number;
  ageFrom: number;
  ageTo: number;

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


}

