import {Component, Input, OnInit, ViewChild} from '@angular/core';

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
  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() { }

  ngOnInit() {
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeCommentWithConfirmation(post: IComment) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  removeCommentWhithCloseConfirmation() {
    this.removeComment();
    this.dialog.hide();
  }

  private removeComment() {
    const comment: IComment = this.dialog.__postToRemove;
    const index: number = this.comments.indexOf(comment);
    if (index !== OUT_OF_BOUND_INDEX) {
      this.comments.splice(index, 1);
    }
  }
}
