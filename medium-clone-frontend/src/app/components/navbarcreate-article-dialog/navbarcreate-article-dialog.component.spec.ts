import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcreateArticleDialogComponent } from './navbarcreate-article-dialog.component';

describe('NavbarcreateArticleDialogComponent', () => {
  let component: NavbarcreateArticleDialogComponent;
  let fixture: ComponentFixture<NavbarcreateArticleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarcreateArticleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarcreateArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
