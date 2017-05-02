import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'his-thisdayinhistory',
  templateUrl: './thisdayinhistory.component.html',
  styleUrls: ['./thisdayinhistory.component.scss']
})
export class ThisdayinhistoryComponent implements OnInit {

  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

  private openLinkInBrowser() {
    window.open(this.feed.link);
  }

}
