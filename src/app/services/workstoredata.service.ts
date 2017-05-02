import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WorkstoredataService {

  workstore: FirebaseListObservable<any[]>;
  workitem: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.folder = 'listingimages';
    this.workstore = this.af.database.list('/workstore') as FirebaseListObservable<Listing[]>
  }

  getListings(){
    return this.workstore;
    
  }

  getListingDetails(id){
    this.workitem = this.af.database.object('/workstore/'+id) as FirebaseObjectObservable<Listing>
    return this.workitem;
  }

  getListingsByTitle(title: any): Observable<Listing[]> {
    return this.af.database.list('workstore')
      .map(_listings => _listings.filter(listing => listing.title.toLowerCase().indexOf(title) !== -1));
  }

  getListingsByCateg(title: any): Observable<Listing[]> {
    return this.af.database.list('workstore')
      .map(_listings => _listings.filter(listing => listing.type == title));
  }

  addListing(workitem){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        workitem.image = selectedFile.name;
        workitem.path = path;
        return this.workstore.push(workitem);
      });
    }
  }

  /*updateListing(id, workitem){
    return this.workstore.update(id, workitem);
  }

  deleteListing(id){
    return this.workstore.remove(id);
  }*/
}

interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  rezumat?:string;
  image?:string;
  institution?:string;
  author?:string;
  rating?:number;
}