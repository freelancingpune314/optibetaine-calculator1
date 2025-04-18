import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  requiredTablets = 170;

  constructor(private router: Router) {}

  goBack() {
    // Navigate to previous screen
    this.router.navigate(['/farm-details']); // Adjust as needed
  }

  goHome() {
    this.router.navigate(['']);
  }
}
