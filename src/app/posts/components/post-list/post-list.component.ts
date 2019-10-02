import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  posts = [
    {id: 'gasga', body: 'Treść 1'},
    {id: 'dsfs', body: 'Treść 2'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
