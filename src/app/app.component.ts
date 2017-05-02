import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import './rxjs-operators';

@Component({
  selector: 'his-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
  }
}
