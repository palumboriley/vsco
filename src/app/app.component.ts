import { Component } from '@angular/core';
import { FeedPictureModel } from './feed/feed-picture.model';
import { mock_picture_list } from './feed/mock_picture_list';
import { CommTopicModel } from './topics/commtopic.model';
import { mock_commtopic_list } from './topics/mock_commtopic_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vsco';
  pictures: FeedPictureModel [] = [];
  commtopics: CommTopicModel[]=[];

  constructor(){
    for(var picture of mock_picture_list){
      console.log(picture);
      this.pictures.push(picture);
    }

    for(var commtopic of mock_commtopic_list){
      console.log(commtopic);
      this.commtopics.push(commtopic);
    }
  }
}
