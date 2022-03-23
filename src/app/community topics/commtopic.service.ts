import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { CommTopicModel } from "./commtopic.model";


@Injectable({
    providedIn: 'root'
})
export class CommtopicService {
    

    constructor(private db: AngularFireDatabase) {

    }

    public getCommTopics() {
        return this.db.list<CommTopicModel>("commtopics").valueChanges();
    }

    public getCommTopic(index: number) {
        
    }

    addCommtopic(commtopic: CommTopicModel){
        return this.db.list<CommTopicModel>("commtopics").push(commtopic);
    }
}