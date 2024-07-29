import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:5000/api/articles';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getArticleById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createArticle(articleData: any): Observable<any> {
    return this.http.post(this.apiUrl, articleData);
  }

  updateArticle(id: string, articleData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, articleData);
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  unpublishArticle(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/unpublish`, {});
  }
}
