import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'his-newsfeeditem',
  templateUrl: './newsfeeditem.component.html',
  styleUrls: ['./newsfeeditem.component.scss']
})
export class NewsfeeditemComponent implements OnInit {

  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

  private openLinkInBrowser() {
    window.open(this.feed.link);
  }

}
