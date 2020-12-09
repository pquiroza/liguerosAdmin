/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  mySubscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
this.mySubscription = this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
// Trick the Router into believing it's last link wasn't previously loaded
  this.router.navigated = false;
  }
}); 
  }

  ngOnInit() {
    //this.analytics.trackPageViews();
  }
}
