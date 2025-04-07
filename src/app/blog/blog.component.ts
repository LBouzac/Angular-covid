import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  ngOnInit(): void {
    this.logWithStyle('Bienvenue sur le blog!');
  }

  logWithStyle(message: string): void {
    console.log('%c' + message, 'color: blue; font-size: 20px; font-weight: bold;');
  }
}
