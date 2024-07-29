import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((data) => {
      this.articles = data;
    });
  }
}
