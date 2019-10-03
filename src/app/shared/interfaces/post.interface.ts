import {IAuthor} from './post-author.interface';

export interface IPost {
  id: string;
  createdTime: string;
  author: IAuthor;
  body: string;
  images: string[];
}
