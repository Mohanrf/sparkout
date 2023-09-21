import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningBlogComponent } from './machine-learning-blog.component';

describe('MachineLearningBlogComponent', () => {
  let component: MachineLearningBlogComponent;
  let fixture: ComponentFixture<MachineLearningBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLearningBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLearningBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
