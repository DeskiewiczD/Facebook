import { Component, OnInit } from '@angular/core';

import {PostsService} from '../../../posts/services/posts.service';
import {IPostList} from '../../../shared/interfaces/post-list.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: IPostList = null;
  error = null;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.setupPosts();
    // console.log('Home page');
  }

  isDisplayLoader() {
    return !(this.posts || this.error);
  }

  private async setupPosts() {
    try {
      this.posts = await this.postsService.getPosts();
    } catch (err) {
      this.error = err;
    }
  }

}
