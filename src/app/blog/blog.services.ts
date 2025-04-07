import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BlogsList {
  name: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private BlogService = new BehaviorSubject<BlogsList[]>([]);

  blogs$ = this.BlogService.asObservable();

  constructor() {
  }

  addBlog(name: string, content: string): void {
    const currentBlogs = this.BlogService.getValue();
    const newBlog = { name, content };
    this.BlogService.next([...currentBlogs, newBlog]);
  }
}
