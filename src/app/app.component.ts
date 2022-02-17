import { Component } from '@angular/core';
import { FeedPictureModel } from './feed/feed-picture.model';
import { mock_picture_list } from './feed/mock_picture_list';
import { CommTopicModel } from './community topics/commtopic.model';
import { mock_commtopic_list } from './community topics/mock_commtopic_list';
import { AccountCircleModel } from './account/accountcircle.model';
import { mock_accountcircle_list } from './account/mock_accountcircle_list';
import { FrequentlySearchedModel } from './support/frequently-searched/frequentlysearched.model';
import { mock_frequentlysearced_list } from './support/frequently-searched/mock_frequentlysearched_list';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vsco';
  
}
