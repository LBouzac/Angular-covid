import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { BlogService } from './blog.services';
import { BlogsList } from './blog.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  imports: [
    AsyncPipe,
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog$: Observable<BlogsList[]>;
  name: string = '';
  content: string = '';

  constructor(private blogService: BlogService) {
    this.blog$ = this.blogService.blogs$;
  }

  addBlog(): void {
    this.blogService.addBlog(this.name, this.content);
  }

  ngOnInit(): void {}
}
