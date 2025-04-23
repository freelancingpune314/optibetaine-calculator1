import { Component, OnInit } from '@angular/core';

declare var cordova: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSplash = true;

  constructor() {
    // Hide splash after 3 seconds
    setTimeout(() => {
      this.showSplash = false;
    }, 6000);
  }


}
