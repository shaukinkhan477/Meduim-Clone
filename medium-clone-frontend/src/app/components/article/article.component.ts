import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  imports: [MatCardModule,CommonModule,FormsModule,MatFormFieldModule,MatIconModule,MatInputModule,RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  article: any;
  comments: any[] = [];
  newComment: string = '';
  articles: any[] = [];
  selectedArticle: any = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(articleId!).subscribe((data) => {
      this.article = data;
    });
  }

  addComment(): void {
    const comment = { content: this.newComment, author: { username: 'current_user' } };
    if (!this.article.comments) {
      this.article.comments = [];
    }
    this.article.comments.push(comment);
    this.newComment = '';
  }

  createArticle(): void {
    // Implement article creation logic
  }

  updateArticle(): void {
    this.articleService.updateArticle(this.article._id, this.article).subscribe((data) => {
      console.log('Article updated:', data);
    });
  }

  deleteArticle(): void {
    this.articleService.deleteArticle(this.article._id).subscribe((data) => {
      console.log('Article deleted:', data);
      this.router.navigate(['/articles']);
    });
  }

  unpublishArticle(): void {
    this.articleService.unpublishArticle(this.article._id).subscribe((data) => {
      console.log('Article unpublished:', data);
      this.article.published = false;
    });
  }
}
