import { Component, OnInit } from "@angular/core";
import { FeedPictureModel } from "./feed-picture.model";
import { FeedService } from "./feed.service";
import { mock_picture_list } from "./mock_picture_list";

@Component({
    selector:"vsco-my-home-layout",
    templateUrl: "my-home-layout.component.html",
    styleUrls: ["my-home-layout.component.css"]
})
export class MyHomeLayoutComponent implements OnInit{
    pictures: FeedPictureModel [] = [];
    
  
    constructor(private feedService:FeedService){
      
    }

    ngOnInit(): void {
        this.feedService.getFeed().subscribe(data=>{
          console.log("Fetching feed data");
          for(var feed of data){
            console.log(feed);
            this.pictures.push(feed);
          }
        })
    }
}