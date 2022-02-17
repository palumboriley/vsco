import { Component, Input } from "@angular/core";

@Component({
    selector:"vsco-profile-blank-component",
    templateUrl: "profile.blank.component.html",
    styleUrls: ["profile.blank.component.css"]
})
export class ProfileBlankComponent{
    @Input() title: string;
    @Input() inside: string;

    constructor(){
        this.title="Missing Title";
       this.inside="missing";
    }

}