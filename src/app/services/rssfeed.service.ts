import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Feed } from '../models/feed';


@Injectable()
export class RssfeedService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private http: Http
  ) {}

  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
  }

  private extractFeeds(res: Response): Feed {
    let feed = res.json();
    return feed || { };
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

