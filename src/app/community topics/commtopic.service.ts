import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommTopicModel } from "./commtopic.model";


@Injectable({
    providedIn: 'root'
})
export class CommtopicService {
    private baseUrl: string = "https://vsco-f1f4d-default-rtdb.firebaseio.com/";
    private feedEndpoint: string = "commtopics.json";

    constructor(private http: HttpClient) {

    }

    public getCommTopics() {
        return this.http.get<CommTopicModel[]>(this.baseUrl + this.feedEndpoint);
    }

    public getCommTopic(index: number) {
        return this.http.get<CommTopicModel>(this.baseUrl + 'feed/' + index + '.json')
    }
}