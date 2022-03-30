import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedPictureComponent } from './feed/feed.picture.component';
import { CommunityForumTopicsComponent } from './community topics/community.forum.topics.component';
import { MyHomeLayoutComponent } from './feed/my-home-layout.component';
import { CommunityLayoutComponent } from './community topics/community-layout.component';
import { ProfilePictureComponent } from './profile/profile.picture.component';
import { ProfileLayoutComponent } from './profile/profile-layout.component';
import { DefaultHomeLayoutComponent } from './default-home-page/default-home-layout.component';
import { AccountLayoutComponent } from './account/account-layout.component';
import { SupportLayoutComponent } from './support/support-layout.component';
import { AddFeedPictureComponent } from './feed/add-feed-picture/add-feed-picture.component';
import { AddCommtopicComponent } from './community topics/add-commtopic/add-commtopic.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes=[
  {
    path:'', 
    component: DefaultHomeLayoutComponent
},
  {
    path: 'feed', 
    component: MyHomeLayoutComponent
},
{
  path:'community',
  component: CommunityLayoutComponent
},
{
  path:'rileympal/gallery',
  component:ProfileLayoutComponent
},
{
  path:'user/account',
  component:AccountLayoutComponent
},
{
  path: 'support',
  component: SupportLayoutComponent
},
{
  path: 'admin',
  component: AddFeedPictureComponent
},
{
  path: 'admin2',
  component: AddCommtopicComponent
},
{
  path: 'auth',
  component: AuthenticationComponent
},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
