import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpdProcessBlogComponent } from './npd-process-blog.component';

describe('NpdProcessBlogComponent', () => {
  let component: NpdProcessBlogComponent;
  let fixture: ComponentFixture<NpdProcessBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpdProcessBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpdProcessBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
