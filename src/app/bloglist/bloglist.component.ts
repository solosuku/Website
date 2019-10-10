import { Component, OnInit } from '@angular/core';
import {BlogModel} from '../blog.model';
import { BlogService} from '../blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs: BlogModel[];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.blogs;
  }

}
