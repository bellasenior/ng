import {
  Component,
  OnInit,
  Input,        // <-- added,
  HostBinding,
  EventEmitter,
  Output
} from '@angular/core';
import { Article } from './article.model'; // <-- added

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  @Output() onArticleDelete:  EventEmitter<any>;

  constructor() {
    this.onArticleDelete = new EventEmitter();
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  delete(): boolean {
    this.onArticleDelete.emit(this.article);
    return false;
  }

  ngOnInit() {
  }

}
