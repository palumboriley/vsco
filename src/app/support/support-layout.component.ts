import { Component } from "@angular/core";
import { FrequentlySearchedModel } from "./frequently-searched/frequentlysearched.model";
import { mock_frequentlysearced_list } from "./frequently-searched/mock_frequentlysearched_list";
import { mock_supporttopics_list } from "./support-topics/mock_supporttopics_list";
import { SupportTopicsModel } from "./support-topics/supporttopics.model";

@Component({
    selector:"support-layout",
    templateUrl: "support-layout.component.html",
    styleUrls: ["support-layout.component.css"]
})
export class SupportLayoutComponent{
    frequentlysearches: FrequentlySearchedModel[]=[];
    supporttopics: SupportTopicsModel[]=[];
  
    constructor(){
  
      for(var supporttopic of mock_supporttopics_list){
        console.log(supporttopic);
        this.supporttopics.push(supporttopic);
      }
  
  
      for(var frequentlysearched of mock_frequentlysearced_list){
        console.log(frequentlysearched);
        this.frequentlysearches.push(frequentlysearched);
      }



     
}
}