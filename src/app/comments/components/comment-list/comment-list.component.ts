import { Component, OnInit } from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments = [
    {id: 'sdgsgsdgsrwr', body: 'Komentarz 1'},
    {id: 'sdgsgsdgsrwr', body: 'Komentarz 2'},
  ] as ICommentList;

  constructor() { }

  ngOnInit() {
  }

  addComment(comment) {
    console.log('add comment', comment);
    this.comments.push(comment);
  }
}
