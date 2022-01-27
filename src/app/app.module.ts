import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/header/topnavbar.component';

import { AppComponent } from './app.component';
import { FeedPictureComponent } from './feed/feed.picture.component';
import { BottomNavBarComponent } from './footer/bottomnavbar.component';
import { LoadButtonComponent } from './load_button/load.button.component';
import { ProfilePictureComponent } from './profile/profile.picture.component';
import { CommunityForumTopicsComponent } from './topics/community.forum.topics.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    FeedPictureComponent,
    CommunityForumTopicsComponent,
    ProfilePictureComponent,
    LoadButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
