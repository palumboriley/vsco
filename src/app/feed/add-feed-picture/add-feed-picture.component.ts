import { Component, OnInit } from '@angular/core';
import { FeedPictureModel } from '../feed-picture.model';
import { FeedService } from '../feed.service';

@Component({
  selector: 'vsco-add-feed-picture',
  templateUrl: './add-feed-picture.component.html',
  styleUrls: ['./add-feed-picture.component.css']
})
export class AddFeedPictureComponent implements OnInit {

  constructor(public ps: FeedService) { }

  ngOnInit(): void {
  }

  addFeedPicture(feed: FeedPictureModel){
    console.log("You clicked add feed image");
    console.log(feed);
    this.ps.addFeedPicture(feed);
  }

}
