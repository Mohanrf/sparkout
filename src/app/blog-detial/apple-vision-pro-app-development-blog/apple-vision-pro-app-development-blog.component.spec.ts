import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleVisionProAppDevelopmentBlogComponent } from './apple-vision-pro-app-development-blog.component';

describe('AppleVisionProAppDevelopmentBlogComponent', () => {
  let component: AppleVisionProAppDevelopmentBlogComponent;
  let fixture: ComponentFixture<AppleVisionProAppDevelopmentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleVisionProAppDevelopmentBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleVisionProAppDevelopmentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
