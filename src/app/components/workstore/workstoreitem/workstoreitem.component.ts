import { Component, OnInit } from '@angular/core';
import { WorkstoredataService } from '../../../services/workstoredata.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'his-workstoreitem',
  templateUrl: './workstoreitem.component.html',
  styleUrls: ['./workstoreitem.component.scss']
})
export class WorkstoreitemComponent implements OnInit {

  id:any;
  workitem: any;
  imageUrl:any;

  constructor(
    private firebaseService: WorkstoredataService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.workitem = listing;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.workitem.path);
      storageRef.child(this.workitem.path).getDownloadURL().then((url) => {
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });

    });
  }

}
