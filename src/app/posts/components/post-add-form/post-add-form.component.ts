import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import uuid from 'uuid';
import faker from 'faker';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  addPostForm = new FormGroup({
    body: new FormControl('', [
      Validators.required
    ])
  });

  get body() {
    return this.addPostForm.get('body');
  }

  @Output() addPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const post = this.addPostForm.getRawValue();

    const newPost = Object.assign({}, post, {
      id: uuid.v4(),
      createdTime: new Date().toString(),
      author: {
        id: uuid.v4(),
        avatarUrl: 'http://placeskull.com/50/50/111111',
        name: faker.fake('{{name.lastName}} {{name.firstName}}')
      },
      images: [
        'http://placeskull.com/50/50/111111'
      ],
      comments: []
    }); // Nie trzeba tworzyć kopii obiektu. getRawValue zwraca zawsze nowy obiekt

    // console.log('submit newPost', newPost);
    this.addPost.emit(newPost);
    // Czyszczenie pol formularz
    this.addPostForm.reset();
  }

}
