import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import uuid from 'uuid';
import faker from 'faker';
import {IComment} from '../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    body: null,
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    }
  } as IComment;

  @Output() addComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('aaa');
    console.log(this.comment);
    const comment = Object.assign({}, this.comment);
    comment.id = uuid.v4();
    comment.createdTime = new Date().toString();
    comment.author.id = uuid.v4();
    comment.author.avatarUrl = 'http://placeskull.com/50/50/000000';
    comment.author.name = faker.fake('{{name.lastName}} {{name.firstName}}');
    this.addComment.emit(comment);
  }


}
