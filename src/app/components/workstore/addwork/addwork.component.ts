import { Component, OnInit } from '@angular/core';
import { WorkstoredataService } from '../../../services/workstoredata.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../../includes/animations';


@Component({
  selector: 'his-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class AddworkComponent implements OnInit {

  title:any;
  author:any;
  institution:any;
  rezumat:any;
  type:any;
  image:any;
  categorii: any[];

  constructor(
    private firebaseService:WorkstoredataService,
    private router:Router
    
  ) { 
    this.categorii=['Books','Archeology','Geopolitics','Medieval','Modern']; //doar la mânuță aici :)
  }

  ngOnInit() {
  }
  

  onAddSubmit(){
    let workitem = {
      title: this.title,
      institution: this.institution,
      author: this.author,
      rezumat:this.rezumat,
      type: this.type
    }

    this.firebaseService.addListing(workitem);

    this.router.navigate(['workstore']);
  }

}
