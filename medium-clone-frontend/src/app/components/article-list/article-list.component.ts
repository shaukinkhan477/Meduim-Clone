import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from "../article/article.component";
import { SearchComponent } from "../search/search.component";
import { CommentService } from '../../services/comment.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateArticleDialogComponent } from '../navbarcreate-article-dialog/navbarcreate-article-dialog.component';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule, MatIconModule, MatInputModule, FormsModule, ArticleComponent, SearchComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  article: any = [];
  articles: any[] = [];
  selectedArticle: any = null;
  comments: any[] = [];
  newComment: string = '';
  count: number = 0;
  // date: Date= new Date;



  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.articleService.getAllArticles().subscribe((data) => {
      this.articles = data;
    });
    this.getArticles();
  }

  selectArticle(articleId: string): void {
    this.articleService.getArticleById(articleId).subscribe((data) => {
      this.selectedArticle = data;
      if (!this.selectedArticle.comments) {
        this.selectedArticle.comments = []; // Initialize comments if undefined
      }
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
  if (this.newComment.trim()) {
    this.articleService.addComment(this.selectedArticle._id, this.newComment).subscribe((data) => {
      this.selectedArticle = data;
      this.newComment = '';
    });
  }
}

  addReaction(type: string): void {
  this.articleService.addReaction(this.selectedArticle._id, type).subscribe((data) => {
    this.selectedArticle = data;
  });
}


  createArticle(): void {
    const dialogRef = this.dialog.open(CreateArticleDialogComponent, {
      width: '400px',
      data: { author: { username: this.authService.currentUserValue.username } }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.articleService.createArticle(result).subscribe((data) => {
          console.log('Article created:', data);
          this.router.navigate(['/articles']);
        });
      }
    });
  }


  updateArticle(): void {
    if (this.selectedArticle && this.selectedArticle._id) {
      this.articleService.updateArticle(this.selectedArticle._id, this.selectedArticle).subscribe((data) => {
        console.log('Article updated:', data);
        // this.router.navigate(['/articles']);
      });
    } else {
      console.error('Article ID is not defined');
    }
  }

  deleteArticle(): void {
    if (this.selectedArticle && this.selectedArticle._id) {
      this.articleService.deleteArticle(this.selectedArticle._id).subscribe((data) => {
        console.log('Article deleted:', data);
        this.selectedArticle = null;
        this.getArticles();
      });
    } else {
      console.error('Article ID is not defined');
    }
  }

  unpublishArticle(): void {
    if (this.selectedArticle && this.selectedArticle._id) {
      this.articleService.unpublishArticle(this.selectedArticle._id).subscribe((data) => {
        console.log('Article unpublished:', data);
        this.selectedArticle.published = false;
      });
    } else {
      console.error('Article ID is not defined');
    }
  }

}
