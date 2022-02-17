import { Component, Input } from "@angular/core";

@Component({
    selector:"vsco-account-circle-component",
    templateUrl: "account.circle.component.html",
    styleUrls: ["account.circle.component.css"]
})
export class AccountCircleComponent{
    @Input() logo: string;
    @Input() title: string;
    @Input() color: string;

    constructor(){
        this.logo="/assets/bootstrap-icons.svg#question-circle";
        this.title="Missing Title";
        this.color="black";
    }

}