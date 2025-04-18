import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-calculate-dose',
  templateUrl: './calculate-dose.component.html',
  styleUrls: ['./calculate-dose.component.scss']
})
export class CalculateDoseComponent {
  constructor(private router: Router, private dataService: DataService) {}

  selectBirdType(type: string) {
    this.dataService.setBirdType(type);
  }

}
