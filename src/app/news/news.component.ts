import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articleTitle: string = "Primo articolo";

  isClicked: boolean = false;

  posts: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getPosts().subscribe(
      response => {
        this.posts = response;
    });
  }

  onShow() {
    this.isClicked = true; 
  }

}
