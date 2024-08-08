import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  // { path: '', component: ArticleListComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  // { path: 'articles/:id', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];
