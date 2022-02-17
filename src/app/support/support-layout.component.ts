import { Component } from "@angular/core";
import { FrequentlySearchedModel } from "./frequently-searched/frequentlysearched.model";
import { mock_frequentlysearced_list } from "./frequently-searched/mock_frequentlysearched_list";

@Component({
    selector:"support-layout",
    templateUrl: "support-layout.component.html",
    styleUrls: ["support-layout.component.css"]
})
export class SupportLayoutComponent{
    frequentlysearches: FrequentlySearchedModel[]=[];
    
  
    constructor(){
  
      for(var frequentlysearched of mock_frequentlysearced_list){
        console.log(frequentlysearched);
        this.frequentlysearches.push(frequentlysearched);
      }

     
}
}