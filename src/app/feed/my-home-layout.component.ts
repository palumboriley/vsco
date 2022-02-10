import { Component } from "@angular/core";
import { CommTopicModel } from "../community topics/commtopic.model";
import { mock_commtopic_list } from "../community topics/mock_commtopic_list";
import { FeedPictureModel } from "./feed-picture.model";
import { mock_picture_list } from "./mock_picture_list";

@Component({
    selector:"vsco-my-home-layout",
    templateUrl: "my-home-layout.component.html",
    styleUrls: ["my-home-layout.component.css"]
})
export class MyHomeLayoutComponent{
    pictures: FeedPictureModel [] = [];
    commtopics: CommTopicModel[]=[];
  
    constructor(){
      for(var picture of mock_picture_list){
        console.log(picture);
        this.pictures.push(picture);
      }
  
      for(var commtopic of mock_commtopic_list){
        console.log(commtopic);
        this.commtopics.push(commtopic);
      }
    }
}