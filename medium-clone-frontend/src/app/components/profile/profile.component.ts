import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule,MatInputModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(public authService: AuthService) { }
}
