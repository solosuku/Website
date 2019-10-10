import { Component, OnInit ,Input} from '@angular/core';
import {BlogModel} from '../../blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() blogi: BlogModel;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }
  promt() {
    alert('Code to be written @@');
  }

}
