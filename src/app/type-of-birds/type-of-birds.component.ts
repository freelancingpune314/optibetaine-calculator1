import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-type-of-birds',
  templateUrl: './type-of-birds.component.html',
  styleUrls: ['./type-of-birds.component.scss']
})
export class TypeOfBirdsComponent implements OnInit{
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.birdType = 'Broiler';
  }

  birds = [
    { label: 'Broiler', selected: true },
    { label: 'Layer', selected: false },
    { label: 'Breeder', selected: false }
  ];



  onToggle(selectedIndex: number) {
    this.birds = this.birds.map((bird, index) => ({
      ...bird,
      selected: index === selectedIndex
    }));
    const selectedBird = this.birds.find(bird => bird.selected);
    this.dataService.birdType = selectedBird ? selectedBird.label : '';
  }

  isAnyBirdSelected(): boolean {
    return this.birds.some(bird => bird.selected);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
