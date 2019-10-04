import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IComment} from '../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: IComment = null;
  constructor() { }

  @Output() removeComment = new EventEmitter();

  ngOnInit() {
  }

  getCommentAutorAvatarURL() {
    if (this.comment && this.comment.author) {
      return this.comment.author.avatarUrl;
    } else {
      return 'http://placeskull.com/50/50/32a852';
    }
  }

  removeComm() {
    this.removeComment.emit(this.comment);
  }
}
