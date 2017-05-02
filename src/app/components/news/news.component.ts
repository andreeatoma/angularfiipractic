import { Component, OnInit } from '@angular/core';
import { RssfeedService } from '../../services/rssfeed.service';
import { FeedEntry } from '../../models/feed-entry';

@Component({
  selector: 'his-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  
  private feedUrl: string = 'http://www.historytoday.com/feed/rss.xml';
  private feeds: Array<FeedEntry> = [];

  constructor (
    private feedService: RssfeedService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feeds.length = 0;
    // Adds 1s of delay to provide user's feedback.
    this.feedService.getFeedContent(this.feedUrl).delay(1000)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

}
