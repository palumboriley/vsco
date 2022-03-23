import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { FeedPictureModel } from "./feed-picture.model";

@Injectable({
    providedIn:'root'
})
export class FeedService{
    

    constructor(private db: AngularFireDatabase){

    }

    public getFeed(){
        return this.db.list<FeedPictureModel>("feed").valueChanges();
    }

    public getAFeed(index:number){

    }

    addFeedPicture(feed: FeedPictureModel){
        return this.db.list<FeedPictureModel>("feed").push(feed);
    }
}