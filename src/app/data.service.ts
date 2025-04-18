import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private birdType: string = '';
  private farmDetails: any = {};

  setBirdType(type: string) {
    this.birdType = type;
  }

  setFarmDetails(details: any) {
    this.farmDetails = details;
  }

  getCalculation() {
    // This is a simplified calculation - adjust based on actual requirements
    const birds = this.farmDetails.numberOfBirds || 0;
    const ageRange = (this.farmDetails.ageTo || 0) - (this.farmDetails.ageFrom || 0);

    // Example calculation - replace with actual formula
    const tablets = Math.ceil(birds * ageRange * 0.1);

    return {
      tablets: tablets,
      birdType: this.birdType,
      ...this.farmDetails
    };
  }
}
