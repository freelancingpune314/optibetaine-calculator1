import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
declare var navigator: any;

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  showSpinner = true;
  isCordova = false;
  titleName="DOSE CALCULATOR"


  constructor() {
    // Check if running in Cordova
    this.isCordova = !!(window as any).cordova;

  }

  ngOnInit() {
    if (navigator.splashscreen) {
      navigator.splashscreen.hide();
    }
    // if (this.isCordova) {
    //   // Hide native splash screen after short delay

    // }

    // Show Angular splash for 3 seconds
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }
}
