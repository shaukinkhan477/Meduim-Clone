import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule,MatChipsModule,MatInputModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  @Output() searchByTag = new EventEmitter<string>();
  searchQuery: string = '';
  tags: string[] = ['tag1', 'tag2', 'tag3'];

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }

  onSearchByTag(tag: string): void {
    this.searchByTag.emit(tag);
  }
}
