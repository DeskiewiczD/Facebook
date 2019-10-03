import {IAuthor} from './post-author.interface';

export interface IComment {
  id: string;
  createdTime: string;
  author: IAuthor;
  body: string;
}
