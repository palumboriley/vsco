import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FeedPictureModel } from "./feed-picture.model";

@Injectable({
    providedIn:'root'
})
export class FeedService{
    private baseUrl:string="https://vsco-f1f4d-default-rtdb.firebaseio.com/";
    private feedEndpoint:string="feed.json";

    constructor(private http:HttpClient){

    }

    public getFeed(){
        return this.http.get<FeedPictureModel[]>(this.baseUrl + this.feedEndpoint);
    }

    public getAFeed(index:number){
return this.http.get<FeedPictureModel>(this.baseUrl+ 'feed/' + index + '.json')
    }
}