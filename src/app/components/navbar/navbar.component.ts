import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'his-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  name: any;
  constructor(
    public af: AngularFire,
    private router: Router
  ) {

  this.af.auth.subscribe(auth => {
    if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
