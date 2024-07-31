import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from "../article/article.component";
import { SearchComponent } from "../search/search.component";


@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule, MatIconModule, MatInputModule, FormsModule, ArticleComponent, SearchComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [];
  selectedArticle: any = null;
  newComment: string = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((data) => {
      this.articles = data;
    });
    this.getArticles();
  }

  selectArticle(articleId: string): void {
    this.articleService.getArticleById(articleId).subscribe((data) => {
      this.selectedArticle = data;
    });
  }

  getArticles(): void {
    this.articleService.getAllArticles().subscribe((data) => {
      this.articles = data;
    });
  }

  searchArticles(query: string): void {
    if (query) {
      this.articleService.searchArticles(query).subscribe((data) => {
        this.articles = data;
      });
    } else {
      this.getArticles();
    }
  }

  addComment(): void {
    const comment = { content: this.newComment, author: { username: 'current_user' } };
    if (!this.selectedArticle.comments) {
      this.selectedArticle.comments = [];
    }
    this.selectedArticle.comments.push(comment);
    this.newComment = '';
  }
}
