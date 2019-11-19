import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articleTitle;
  @Input() isClicked;

  @Output() show = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


}
