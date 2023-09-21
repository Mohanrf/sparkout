import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComment2Component } from './post-comment2.component';

describe('PostComment2Component', () => {
  let component: PostComment2Component;
  let fixture: ComponentFixture<PostComment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
