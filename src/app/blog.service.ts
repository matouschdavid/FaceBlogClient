import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  public getAllBlogs():Observable<Blog[]> {
       return this.http.get<Blog[]>("https://localhost:7142/Blog");
  }

  public postBlog(){
     this.http.post<Blog>("https://localhost:7142/Blog", {
      title: "Test",
      text: "Text",
      author: "Me"
    }).subscribe(data => {
      console.log(data);
    });

  }
}
