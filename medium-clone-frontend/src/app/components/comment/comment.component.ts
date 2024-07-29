import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  @Input() articleId!: string;
  comments: any[] = [];
  newComment: string = '';

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.commentService.getCommentsForArticle(this.articleId).subscribe((data) => {
      this.comments = data;
    });
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.commentService.addComment(this.articleId, { content: this.newComment }).subscribe((data) => {
        this.comments.push(data);
        this.newComment = '';
      });
    }
  }
}
