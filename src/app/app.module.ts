import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/header/topnavbar.component';

import { AppComponent } from './app.component';
import { FeedPictureComponent } from './feed/feed.picture.component';
import { BottomNavBarComponent } from './footer/bottomnavbar.component';
import { LoadButtonComponent } from './load_button/load.button.component';
import { ProfilePictureComponent } from './profile/profile.picture.component';
import { CommunityForumTopicsComponent } from './community topics/community.forum.topics.component';
import { AppRoutingModule } from './app-routing.module';
import { MyHomeLayoutComponent } from './feed/my-home-layout.component';
import { CommunityLayoutComponent } from './community topics/community-layout.component';
import { ProfileLayoutComponent } from './profile/profile-layout.component';
import { DefaultHomeLayoutComponent } from './default-home-page/default-home-layout.component';
import { AccountLayoutComponent } from './account/account-layout.component';
import { SupportLayoutComponent } from './support/support-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    FeedPictureComponent,
    CommunityForumTopicsComponent,
    ProfilePictureComponent,
    LoadButtonComponent,
    MyHomeLayoutComponent,
    CommunityLayoutComponent,
    ProfileLayoutComponent,
    DefaultHomeLayoutComponent,
    AccountLayoutComponent,
    SupportLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
