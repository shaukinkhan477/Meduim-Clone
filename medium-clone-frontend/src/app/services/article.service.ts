import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:5000/api/articles';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllArticles(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((data) => console.log('Articles fetched from API:', data))
    );
  }

  getArticleById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createArticle(articleData: any): Observable<any> {
    return this.http.post(this.apiUrl, articleData, { headers: this.getAuthHeaders() }).pipe(
      tap((data) => console.log('Article created:', data))
    );
  }

  updateArticle(id: string, articleData: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, articleData, { headers: this.getAuthHeaders() }).pipe(
    tap((data) => console.log('Article updated:', data))
  );
}

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() }).pipe(
      tap((data) => console.log('Article deleted:', data))
    );
  }

  unpublishArticle(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/unpublish`, {}, { headers: this.getAuthHeaders() }).pipe(
      tap((data) => console.log('Article unpublished:', data))
    );
  }

  searchArticles(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?query=${query}`).pipe(
      tap((data) => console.log('Search results:', data))
    );
  }

 addComment(articleId: string, content: string): Observable<any> {
  const body = { content };
  return this.http.post(`${this.apiUrl}/${articleId}/comments`, body, { headers: this.getAuthHeaders() }).pipe(
    tap((data) => console.log('Comment added:', data))
  );
}

addReaction(articleId: string, type: string): Observable<any> {
  const body = { type };
  return this.http.post(`${this.apiUrl}/${articleId}/reactions`, body, { headers: this.getAuthHeaders() }).pipe(
    tap((data) => console.log('Reaction added:', data))
  );
}

}
