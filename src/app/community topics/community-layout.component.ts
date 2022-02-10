import { Component } from "@angular/core";
import { CommTopicModel } from "./commtopic.model";
import { mock_commtopic_list } from "./mock_commtopic_list";

@Component({
    selector:"vsco-community-layout",
    templateUrl: "community-layout.component.html",
    styleUrls: ["community-layout.component.css"]
})
export class CommunityLayoutComponent{
    commtopics: CommTopicModel[]=[];
  
    constructor(){
  
      for(var commtopic of mock_commtopic_list){
        console.log(commtopic);
        this.commtopics.push(commtopic);
      }
    }
}