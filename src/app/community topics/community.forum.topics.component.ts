import { Component, Input } from "@angular/core";

@Component({
    selector:"vsco-community-forum-topics-component",
    templateUrl: "community.forum.topics.component.html",
    styleUrls: ["community.forum.topics.component.css"]
})
export class CommunityForumTopicsComponent{
    @Input() logo: string;
    @Input() title: string;
    @Input() firstLine: string;
    @Input() secondLine:string;
    @Input() thirdLine:string;
    @Input() fourthLine:string;
    @Input() link: string;
    @Input() link2: string;
    @Input() color: string;

    constructor(){
        this.logo="/assets/bootstrap-icons.svg#question-circle";
        this.title="Missing Title";
        this.firstLine="Missing ";
        this.secondLine="Missing";
        this.thirdLine="Missing";
        this.fourthLine="Missing";
        this.link="Missing";
        this.link2="Missing";
        this.color="black";
    }

}


