import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-navbarcreate-article-dialog',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule],
  templateUrl: './navbarcreate-article-dialog.component.html',
  styleUrl: './navbarcreate-article-dialog.component.css'
})
export class CreateArticleDialogComponent {
  title: string = '';
  content: string = '';

  constructor(
    public dialogRef: MatDialogRef<CreateArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  create(): void {
    const newArticle = {
      title: this.title,
      content: this.content,
      author: this.data.author
    };
    this.dialogRef.close(newArticle);
  }
}
