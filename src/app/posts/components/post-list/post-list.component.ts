import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {IPostList} from '../../../shared/interfaces/post-list.interface';
import {IPost} from '../../../shared/interfaces/post.interface';

const OUT_OF_BOUND_INDEX = -1;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPostList = null;
  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() { }

  ngOnInit() {
  }

  addPost(post) {
    this.posts.unshift(post);
  }

  removePostWithConfirmation(post: IPost) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  removePostWhithCloseConfirmation() {
    this.removePost();
    this.dialog.hide();
  }

  private removePost() {
    const post: IPost = this.dialog.__postToRemove;
    const index: number = this.posts.indexOf(post);
    if (index !== OUT_OF_BOUND_INDEX) {
      this.posts.splice(index, 1);
    }
  }
}
