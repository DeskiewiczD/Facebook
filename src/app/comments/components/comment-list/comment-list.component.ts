import {Component, Input, OnInit} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';
import {IComment} from '../../../shared/interfaces/comment.interface';

const OUT_OF_BOUND_INDEX = -1;

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;

  constructor() { }

  ngOnInit() {
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(comment: IComment) {
    const index: number = this.comments.indexOf(comment);
    if (index !== OUT_OF_BOUND_INDEX) {
      this.comments.splice(index, 1);
    }
  }
}
