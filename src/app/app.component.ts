import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Picsum photos/', 'https://picsum.photos/200/300', 3),
      new Article('Unsplash', 'https://source.unsplash.com/random', 2),
      new Article('LoremFlickr', 'https://loremflickr.com/320/240', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b:Article) => b.votes - a.votes);
  }

}
