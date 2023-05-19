import { Post } from './post.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, date: string, content: string) {
    const post: Post = { title: title, date: date, content: content };
    this.posts.push(post);
  }
}