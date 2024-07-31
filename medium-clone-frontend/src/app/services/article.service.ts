import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:5000/api/articles';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((data) => console.log('Articles fetched from API:', data))
    );
  }

  getArticleById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createArticle(articleData: any): Observable<any> {
    return this.http.post(this.apiUrl, articleData).pipe(
      tap((data) => console.log('Article created:', data))
    );
  }

  updateArticle(id: string, articleData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, articleData).pipe(
      tap((data) => console.log('Article updated:', data))
    );
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap((data) => console.log('Article deleted:', data))
    );
  }

  unpublishArticle(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/unpublish`, {}).pipe(
      tap((data) => console.log('Article unpublished:', data))
    );
  }

  searchArticles(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?query=${query}`).pipe(
      tap((data) => console.log('Search results:', data))
    );
  }
}
