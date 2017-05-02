import { Component, OnInit } from '@angular/core';
import { WorkstoredataService } from '../../services/workstoredata.service';

@Component({
  selector: 'his-workstore',
  templateUrl: './workstore.component.html',
  styleUrls: ['./workstore.component.scss']
})
export class WorkstoreComponent implements OnInit {

  workstore:any;
  search:any;
  count:any;
  categorii: any[];


  constructor(private firebaseService:WorkstoredataService) {
    this.firebaseService.getListings().subscribe(workstore => {
      this.workstore = workstore;
      this.count = workstore.length;
      this.categorii=['Books','Archeology','Geopolitics','Medieval','Modern']; //doar la mânuță aici :)
    });
  }

  ngOnInit() {
    
  }

  resetfilter(){    
    this.firebaseService.getListings().subscribe(workstore => {
      this.workstore = workstore;
    });
  }

  searchProps(){    
    this.firebaseService.getListingsByTitle(this.search.toLowerCase()).subscribe(workstore => { 
      this.workstore = workstore;
    });
  }

  filterCategorie(categorie){
    this.firebaseService.getListingsByCateg(categorie).subscribe(workstore => { 
      this.workstore = workstore;
    });
  }

}
