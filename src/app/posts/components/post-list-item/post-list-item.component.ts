import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnChanges {

  @Input() post = null;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.post && change.post.firstChange) {
      this.post.comments = [];
    }
  }

  getPostUrl(): string {
    if (this.post) {
      return `/posts/${this.post.id}`;
    }
    return '';
  }

  getPostAuthorAvatarUrl(): string {
    if (this.post && this.post.author) {
      return this.post.author.avatarUrl;
    }
    return '';
  }
}
