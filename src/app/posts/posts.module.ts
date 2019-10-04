import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import {SharedModule} from '../shared/shared.module';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import {CommentsModule} from '../comments/comments.module';
import { PostAddFormComponent } from './components/post-add-form/post-add-form.component';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent, PostProfilePageComponent, PostAddFormComponent],
  exports: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    HttpClientModule,
    CommentsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
