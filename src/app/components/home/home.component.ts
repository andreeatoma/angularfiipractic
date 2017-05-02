import { Component, OnInit } from '@angular/core';
import { RssfeedService } from '../../services/rssfeed.service';
import { FeedEntry } from '../../models/feed-entry';
import { moveIn, fallIn, moveInLeft, moveInRight } from '../../includes/animations';

@Component({
  selector: 'his-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // private feedUrl: string = 'http://news.bbc.co.uk/rss/on_this_day/front_page/rss.xml';
  private feedUrl: string = 'https://updates.loc.gov/topics/USLOC_155/feed.rss';
  private feeds: Array<FeedEntry> = [];

  constructor (
    private feedService: RssfeedService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feeds.length = 0;
    this.feedService.getFeedContent(this.feedUrl).delay(1000)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

}
