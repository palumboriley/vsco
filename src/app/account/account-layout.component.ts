import { Component } from "@angular/core";
import { AccountCircleModel } from "./accountcircle.model";
import { mock_accountcircle_list } from "./mock_accountcircle_list";



@Component({
    selector:"vsco-account-layout",
    templateUrl: "account-layout.component.html",
    styleUrls: ["account-layout.component.css"]
})
export class AccountLayoutComponent{

    accountcircles: AccountCircleModel[]=[];
  
  
    constructor(){
  
      for(var accountcircle of mock_accountcircle_list){
        console.log(accountcircle);
        this.accountcircles.push(accountcircle);
      }

     
    }

}


