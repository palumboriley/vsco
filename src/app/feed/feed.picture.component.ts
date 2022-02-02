import { Component, Input } from "@angular/core";

@Component({
    selector:"vsco-feed-picture",
    templateUrl: "feed.picture.component.html",
    styleUrls: ["feed.picture.component.css"]
})
export class FeedPictureComponent{
    @Input() img: string;
    @Input() name: string;

    constructor(){
        this.img = "./assets/IMG_2302.JPG"
        this.name = "rileympal";
    }

}