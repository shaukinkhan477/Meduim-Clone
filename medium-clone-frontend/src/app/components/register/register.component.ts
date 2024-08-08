import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule,MatCardModule,FormsModule,MatInputModule,MatSelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  username: string = '';
  role: string = 'user'; // Default role

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    const userData = {
      email: this.email,
      password: this.password,
      username: this.username,
      role: this.role
    };

    this.authService.register(userData).subscribe(
      response => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration error:', error);
      }
    );
  }
}
