import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-of-birds',
  templateUrl: './type-of-birds.component.html',
  styleUrls: ['./type-of-birds.component.scss']
})
export class TypeOfBirdsComponent {
  constructor(private router: Router) {}
  birds = [
    { label: 'Broiler', selected: false },
    { label: 'Layer', selected: false },
    { label: 'Breeder', selected: false }
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
