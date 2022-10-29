import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {
  blogs$: Observable<Blog[]>;
  constructor(private blogService: BlogService) {
    this.blogs$ = this.blogService.getAllBlogs();
  }

  ngOnInit(): void {
  }

  postBlog(){
    this.blogService.postBlog();
  }
}
