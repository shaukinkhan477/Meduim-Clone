import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:5000/api/comments';

  constructor(private http: HttpClient) { }

  getCommentsForArticle(articleId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${articleId}`);
  }

  addComment(articleId: string, commentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${articleId}`, commentData);
  }
}
