import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { CommentService } from '../../services/comment.service';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MatCardModule,CommonModule,FormsModule,MatFormFieldModule,MatIconModule,MatInputModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  article: any;
  comments: any[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(articleId!).subscribe((data) => {
      this.article = data;
    });

    this.commentService.getCommentsForArticle(articleId!).subscribe((data) => {
      this.comments = data;
    });
  }

  addComment(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.commentService.addComment(articleId!, { content: this.newComment }).subscribe((data) => {
      this.comments.push(data);
      this.newComment = '';
    });
  }
}
