import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  articles: Article[];

  constructor(private http: HttpClient) {

    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('Something went wrong!');
      });
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  deleteArticle(articleToDelete: Article) {
    let index = this.articles.indexOf(articleToDelete);
    this.articles.splice(index, 1);
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  getBorderWithRandomColor(i: number): string {
    return i % 2 === 0 ? '#ffbdbd' : '#c2ffc2';
  }
}
